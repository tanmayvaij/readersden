import { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { GlobalStates } from "../context";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";

export default function MyBooks() {
  const { user, mybooks, apiUrl } = GlobalStates();

  // State to store uploaded file
  const [file, setFile] = useState("");

  const [state, setState] = useState({ name: "", desc: "" });

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) alert("Please upload an image first!");

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          const res = await fetch(`${apiUrl}/api/book/add_book`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              user_id: user.id,
              user_name: user.name,
              user_email: user.email,
              user_number: user.number,
              book_name: state.name,
              book_image: url,
              book_desc: state.desc,
            }),
          });

          const data = await res.json();

          location.reload();
        });
      }
    );
  };

  return (
    <div
      id="mybooks"
      className="pt-28 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="space-y-3 sm:pl-60">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload Book Image
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
          onChange={handleChange}
          accept="/image/*"
        />

        <input
          name="name"
          value={state.name}
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          type="text"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter book name"
        ></input>

        <input
          name="desc"
          value={state.desc}
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          type="text"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter book description"
        ></input>

        <button
          onClick={handleUpload}
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Upload
        </button>

        <p className="font-medium text-center">{percent} % done</p>
      </div>

      <div className="sm:pl-60 mt-10 sm:flex-row sm:flex-wrap flex flex-col items-center justify-center">
        {mybooks === null ? (
          <Loader />
        ) : mybooks.length !== 0 ? (
          mybooks.map((val, id) => {
            return (
              <BookCard
                key={id}
                img={val?.book_image}
                name={val?.book_name}
                desc={val?.book_desc}
                _id={val?._id}
                visible={val?.visible}
              />
            );
          })
        ) : (
          <div>No books to show</div>
        )}
      </div>
    </div>
  );
}
