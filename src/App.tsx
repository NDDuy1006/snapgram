import { Routes, Route } from "react-router-dom";

import "./globals.css";
import {
  Explore,
  Home,
  People,
  PostCreate,
  PostDetails,
  PostEdit,
  Profile,
  ProfileUpdate,
  Saved
} from "./_root/pages";
import { Toaster } from "./components/ui/toaster";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />} >
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/people" element={<People />} />
          <Route path="/post-create" element={<PostCreate />} />
          <Route path="/post-update/:id" element={<PostEdit />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/profile-update/:id" element={<ProfileUpdate />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
};

export default App;