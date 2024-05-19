import { Routes, Route } from "react-router-dom"
import Layout from "./components/admin/layout/Layout"
import Contacts from "./pages/admin/contacts/Contacts"
import ContactForm from "./pages/admin/contacts/ContactForm"
import ContactUpload from "./pages/admin/contacts/ContactUpload"
import FilterView from "./pages/admin/contacts/FilterView"
import Archive from "./pages/admin/contacts/Archive"
import Message from "./pages/admin/contacts/Message"

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="/contacts" element={<Contacts />}/>
              <Route path="/dashboard"/>
              <Route path="/contacts/form" element={<ContactForm />}/>
              <Route path="/contacts/upload" element={<ContactUpload />}/>
              <Route path="/contacts/filter-view" element={<FilterView />}/>
              <Route path="/contacts/archive" element={<Archive />}/>
              <Route path="/contacts/message" element={<Message />}/>
              <Route path="/accounting"/>
              <Route path="/invoice"/>
              <Route path="/bills"/>
              <Route path="/vendorKYC"/>
          </Route>
          <Route path="/*" element="404 error"/>
      </Routes>
    </>
  )
}

export default App
