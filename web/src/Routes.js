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
        <Route
          path="/admin/bug-critters/new"
          page={NewBugCritterPage}
          name="newBugCritter"
        />
        <Route
          path="/admin/bug-critters/{id:Int}/edit"
          page={EditBugCritterPage}
          name="editBugCritter"
        />
        <Route
          path="/admin/bug-critters/{id:Int}"
          page={BugCritterPage}
          name="bugCritter"
        />
        <Route
          path="/admin/bug-critters"
          page={BugCrittersPage}
          name="bugCritters"
        />
        <Route
          path="/admin/fish-critters/new"
          page={NewFishCritterPage}
          name="newFishCritter"
        />
        <Route
          path="/admin/fish-critters/{id:Int}/edit"
          page={EditFishCritterPage}
          name="editFishCritter"
        />
        <Route
          path="/admin/fish-critters/{id:Int}"
          page={FishCritterPage}
          name="fishCritter"
        />
        <Route
          path="/admin/fish-critters"
          page={FishCrittersPage}
          name="fishCritters"
        />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
