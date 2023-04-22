import './App.css';
import './pages/Login';
import "./index.css";
import { useState } from 'react';
import axios from 'axios';
export const HOST = "https://4a5f-2405-201-f012-29b1-227d-3b27-5461-9a90.ngrok-free.app"
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signin = async (e) => {
    e.preventDefault();
    await fetch(`${HOST}/api/login/`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ "username": username, "password": password }), // body data type must match "Content-Type" header
    }).then(res => {
      res.json().then((body) => {
        console.log(body);
      })
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div
      style={{
        backgroundColor: "#454080",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
      }}
      className="flex justify-center items-center h-screen">
      <div className="text-left w-full max-w-lg">
        <div className="bg-cyan py-6 sm:py-8 lg:py-12 px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl text-white md:mb-8 lg:text-3xl font-poppins">Login</h2>

          <div className="rounded-lg">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label

                  className="mb-2 inline-block text-sm text-white sm:text-base font-poppins"
                >
                  Username
                </label>
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring font-poppins"
                  style={{ color: "#514B96" }}
                />
              </div>

              <div>
                <label
                  htmlFor=" password"
                  className="mb-2 inline-block text-sm text-white sm:text-base font-poppins"
                >
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  type="password"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring font-poppins"
                  style={{ color: "#514B96" }}
                />
              </div>

              <div className="flex items-center gap-2 text-white font-poppins">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>

              <button onClick={signin}
                className="block rounded-lg bg-#F47458 px-8 py-3 text-center text-sm text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base font-poppins"
                style={{ backgroundColor: "#F47458" }}
              >
                Sign In
              </button>



              <div className="flex items-center gap-2 text-white font-poppins">
                <p className="flex items-center gap-2 text-center text-sm text-white-500 font-poppins">
                  Don't have an account.?{" "}
                  <a
                    href="#"
                    className="text-#F47458 transition duration-100 hover:text-indigo-600 active:text-indigo-700 font-poppins"
                    style={{ color: "#F47458" }}
                  >
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
