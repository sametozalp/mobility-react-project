import { Route, Routes } from "react-router-dom";
import EntityAdd from "../pages/EntityAdd";
import EntityDelete from "../pages/EntityDelete";
import EntityListContent from "../pages/EntityListContent";
import EntitySearch from "../pages/EntitySearch";

export default function myRouter() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<EntityListContent />} />
                <Route exact path='/entity/list' element={<EntityListContent />} />
                <Route exact path='/entity/add' element={<EntityAdd />} />
                <Route exact path='/entity/delete' element={<EntityDelete />} />
                <Route exact path='/entity/search' element={<EntitySearch />} />
            </Routes>
        </div>
    )
}
