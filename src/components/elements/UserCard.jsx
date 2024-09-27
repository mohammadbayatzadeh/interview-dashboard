import React from "react";

function UserCard({ id, name, username, email }) {
  return (
    <div className="bg-white grow max-w-half flex rounded shadow-lg h-fit p-3 ">
      <span className="min-w-[60px] h-[60px] flex items-center mr-2 text-3xl justify-center bg-slate-200 m-auto text-xl shadow-lg  rounded-full">
        {id}
      </span>
      <div className="w-full">
        <p>Name : {name}</p>
        <p>User name : {username}</p>
        <p>Email : {email}</p>
      </div>
    </div>
  );
}

export default UserCard;
