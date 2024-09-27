import React from "react";
import { useQuery } from "react-query";
import { getUsers } from "../../../services/users";
import Loading from "../../modules/Loading";
import UserCard from "../../elements/UserCard";
import ErrorHandler from "../../modules/ErrorHandler";

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  if (isLoading) return <Loading />;
  if(error) return <ErrorHandler text='some error happened, please try again.' />
  return (
    <div className="w-full flex flex-wrap gap-3 !items-start justify-evenly">
      {data?.map((item) => (
        <UserCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Users;
