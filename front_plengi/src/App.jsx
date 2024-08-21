import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";

import TasksPage from "./pages/TasksPage";
import TasksFormPage from "./pages/TasksFormPage";
import { TaskProvider } from "./context/TasksContext";

import ProfilePage from "./pages/ProfilePage";

import ActivityFormPage from "./pages/ActivityFormPage";
import ActivityPage from "./pages/ActivityPage";
import { ActivityProvider } from "./context/Activity_user_context";

import MaterialFormPage from "./pages/MaterialFormPage";
import MaterialPage from "./pages/MaterialPage";
import { MaterialProvider } from "./context/Material_user_context";

import EquipoFormPage from "./pages/EquipoFormPage";
import EquipoPage from "./pages/EquipoPage";
import { EquipoProvider } from "./context/Equipo_user_context";

import LabourFormPage from "./pages/LabourFormPage";
import LabourPage from "./pages/LabourPage";
import { LabourProvider } from "./context/Labour_user_context";

import ApuPage from "./pages/ApuPage";
import ApuSearch from "./pages/ApuSearch";
import ApuFormPage from "./pages/ApuFormPage";
import ApuPagePrueba from "./pages/ApuPagePrueba";
import { ApuProvider } from "./context/Apu_user_context";

import BDPage from "./pages/BDPAge";
import { BDProvider } from "./context/BDContext";

import ProtectedRoute from "./ProtectedRoute";
import Navar from "./components/Navar";
import ApuSelectPage from "./pages/ApuSelectPage";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <ActivityProvider>
          <MaterialProvider>
            <EquipoProvider>
              <LabourProvider>
                <ApuProvider>
                  <BDProvider>
                    <BrowserRouter>
                      <main className="container mx-auto px-10">
                        <Navar />
                        <Routes>
                          <Route path='/' element={<HomePage />} />
                          <Route path='/login' element={<LoginPage />} />
                          <Route path='/register' element={<RegisterPage />} />

                          {/* --- rutas protegidas --- */}
                          <Route element={<ProtectedRoute />}>

                            {/* Tareas */}
                            <Route path='/tasks' element={<TasksPage />} />
                            <Route path='/add-task' element={<TasksFormPage />} />
                            <Route path='/tasks/:id' element={<TasksFormPage />} />
                            <Route path='/profile' element={<ProfilePage />} />

                            {/* Actividades usuario */}
                            <Route path='/activity' element={<ActivityPage />} />
                            <Route path='/add-activity' element={<ActivityFormPage />} />
                            <Route path='/activity/:id' element={<ActivityFormPage />} />

                            {/* Materiales usuario */}
                            <Route path='/material' element={<MaterialPage />} />
                            <Route path='/add-material' element={<MaterialFormPage />} />
                            <Route path='/material/:id' element={<MaterialFormPage />} />

                            {/* Equipo usuario */}
                            <Route path='/equipo' element={<EquipoPage />} />
                            <Route path='/add-equipo' element={<EquipoFormPage />} />
                            <Route path='/equipo/:id' element={<EquipoFormPage />} />

                            {/* Mano de obra usuario */}
                            <Route path='/labour' element={<LabourPage />} />
                            <Route path='/add-labour' element={<LabourFormPage />} />
                            <Route path='/labour/:id' element={<LabourFormPage />} />

                            {/* Apu usuario */}
                            <Route path='/apu' element={<ApuPage />} />
                            <Route path='/apuselect' element={<ApuSelectPage />} />
                            <Route path='/apusearch' element={<ApuSearch />} />
                            <Route path='/apuprueba' element={<ApuPagePrueba />} />
                            <Route path='/add-apu' element={<ApuFormPage />} />
                            <Route path='/apu/:id' element={<ApuFormPage />} />

                            {/* --- /rutas protegidas --- */}
                          </Route>

                          {/* BD */}

                          <Route path='/bd' element={<BDPage />} />
                          {/* <Route path='/add-bd' element={<BDFormPage />} />
                        <Route path='/bd/:id' element={<ApuFormPage />} /> */}

                        </Routes>
                      </main>
                    </BrowserRouter>
                  </BDProvider>
                </ApuProvider>
              </LabourProvider>
            </EquipoProvider>
          </MaterialProvider>
        </ActivityProvider>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App