import React from "react";
import { Routes, Route, Navigate  } from 'react-router-dom';
import Todos from "../pages/todos";

function Routers() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/v1" replace />} />
                <Route path="/v1" element={<Todos />} />
            </Routes>
        </div>
    );
}

export default Routers;