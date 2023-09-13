// import PostThread from "@/components/forms/PostThread";
// import { fetchUser } from "@/lib/actions/user.actions";
// import { currentUser } from "@clerk/nextjs";
// import { redirect } from "next/navigation";

// async function Page(){
//   const user = await currentUser();

//   if(!user) return null;

//   const userInfo = await fetchUser(user.id);

//   // const data = JSON.stringify(userInfo._id);

//   // console.log("GGG: ",data); 

//   if(!userInfo?.onboarded) redirect('/onboarding');

//    return  <>
//           <h1 className="head-text">Create Thread</h1>
//           <PostThread userId={userInfo._id} />
//           </>
// }

// export default Page; 

import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  // fetch organization list created by user
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  // const res = JSON.stringify(userInfo._id);

  // console.log("res: ",res);

  return (
    <>
      <h1 className='head-text'>Create Thread</h1>
 
      <PostThread userId={userInfo._id} />
    </>
  );
}

export default Page;