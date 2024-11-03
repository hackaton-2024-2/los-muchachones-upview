import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const sampleGoals = [
  "Mejorar la retención de clientes en un 5%",
  "Incrementar las ventas semanales en un 10%",
  "Optimizar el tiempo de respuesta en soporte al cliente",
  "Reducir el tiempo de entrega de productos en un 15%",
  "Aumentar el engagement en redes sociales",
  "Implementar feedback de clientes en productos",
  "Identificar oportunidades de mejora en procesos internos",
  "Completar entrenamiento de equipo en nuevas herramientas",
];

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [completedGoals, setCompletedGoals] = useState({});

  const generateGoals = () => {
    // Simula la creación de objetivos aleatorios usando IA
    const newGoals = Array.from({ length: 3 }, () => {
      const randomGoal = sampleGoals[Math.floor(Math.random() * sampleGoals.length)];
      return randomGoal;
    });
    setGoals(newGoals);
    setCompletedGoals({}); // Resetea el estado de los objetivos completados
  };

  const handleGoalCompletion = (index) => {
    // Cambia el estado de completado del objetivo específico
    setCompletedGoals((prev) => {
      const updatedCompletedGoals = { ...prev, [index]: !prev[index] };
      // Verifica si todos los objetivos están completados
      if (Object.values(updatedCompletedGoals).filter(Boolean).length === goals.length) {
        setTimeout(() => {
          generateGoals();
        }, 500); // Ajusta el tiempo de espera si es necesario
      }
      return updatedCompletedGoals;
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md max-w-lg w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Objetivos Semanales</h2>

        {/* Lista de objetivos */}
        <ul className="space-y-2">
          {goals.length > 0 ? (
            goals.map((goal, index) => (
              <li
                key={index}
                className={`p-3 rounded-md flex items-center justify-between bg-gray-700 ${
                  completedGoals[index] ? 'line-through text-gray-500' : ''
                }`}
              >
                <span>{goal}</span>
                <input
                  type="checkbox"
                  checked={!!completedGoals[index]}
                  onChange={() => handleGoalCompletion(index)}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </li>
            ))
          ) : (
            <p className="text-gray-400 text-center">No hay objetivos generados esta semana.</p>
          )}
        </ul>

        {/* Botón para generar objetivos */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={generateGoals}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold transition-colors"
          >
            <FaPlusCircle className="text-lg" />
            Generar Objetivos con IA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goals;
