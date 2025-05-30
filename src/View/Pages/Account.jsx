import UpdatePassword from "../features/authentications/UpdatePassword";
import UpdateUserAccount from "../features/authentications/UpdateUserAccountData";


function Account() {
  return (
    <div className=" flex flex-col gap-4 m-3 ">
    <h2 className="text-customOrange-800  dark:text-customOrange-400 text-3xl font-[500]">Update your Account</h2>
    <UpdateUserAccount/>
    <UpdatePassword/>
  </div>
  );
}

export default Account;
