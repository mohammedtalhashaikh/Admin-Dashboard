import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import "./App.css";

const App = () => {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent context="settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3
              hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "aqua", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar-0</div>
          )}

          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              navbar
            </div>
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={"Ecommerce"} />
              <Route path="/ecommerce" element="ecom" />

              {/* Pages */}
              <Route path="/orders" element="orders" />
              <Route path="/employess" element="employess" />
              <Route path="/customers" element="customers" />

              {/* Apps */}
              <Route path="/kanban" element="kanban" />
              <Route path="/editor" element="editor" />
              <Route path="/calendar" element="calendar" />
              <Route path="/color-picker" element="color-picker" />

              {/* Charts */}
              <Route path="/line" element="line" />
              <Route path="/area" element="area" />
              <Route path="/bar" element="bar" />
              <Route path="/pie" element="pie" />
              <Route path="/financial" element="financial" />
              <Route path="/color-mapping" element="color-mapping" />
              <Route path="/pyramid" element="pyramid" />
              <Route path="/stacked" element="stacked" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
