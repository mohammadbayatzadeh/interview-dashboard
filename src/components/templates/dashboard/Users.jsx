import React from "react";
import { useQuery } from "react-query";
import { getUsers } from "../../../services/users";
import Loading from "../../modules/Loading";
import UserCard from "../../elements/UserCard";

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  if (isLoading) return <Loading />;
  if(error) return <p>some error accoured, please try again.</p>
  return (
    <div className="w-full flex flex-wrap gap-3 !items-start">
      {data?.map((item) => (
        <UserCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Users;
