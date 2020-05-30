// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route
        path="/bug-detail/{id:Int}"
        page={BugDetailPage}
        name="bugDetail"
      />
      <Route path="/" page={HomePage} name="home" />
      <Private unauthenticated="home">
        <Route path="/admin/bugs/new" page={NewBugPage} name="newBug" />
        <Route
          path="/admin/bugs/{id:Int}/edit"
          page={EditBugPage}
          name="editBug"
        />
        <Route path="/admin/bugs/{id:Int}" page={BugPage} name="bug" />
        <Route path="/admin/bugs" page={BugsPage} name="bugs" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
