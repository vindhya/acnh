// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route
        path="/bug-detail/{id:Int}"
        page={BugDetailPage}
        name="bugDetail"
      />
      <Route path="/bugs/new" page={NewBugPage} name="newBug" />
      <Route path="/bugs/{id:Int}/edit" page={EditBugPage} name="editBug" />
      <Route path="/bugs/{id:Int}" page={BugPage} name="bug" />
      <Route path="/bugs" page={BugsPage} name="bugs" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
