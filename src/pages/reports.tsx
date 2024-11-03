import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaArrowLeft, FaArrowRight, FaChartLine, FaBullseye, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const lineChartData = [
  { year: '2019', roa: 1.0, roe: 2.0, margenNeto: 1.5 },
  { year: '2020', roa: 0.8, roe: 1.5, margenNeto: 1.0 },
  { year: '2021', roa: 2.0, roe: 5.0, margenNeto: 3.5 },
  { year: '2022', roa: 1.5, roe: 3.5, margenNeto: 2.5 },
  { year: '2023', roa: 3.0, roe: 6.0, margenNeto: 4.0 },
];

const forecastData = [
  { year: '2019', ingresos: 800000000, prev: 800000000, limiteInferior: 750000000, limiteSuperior: 850000000 },
  { year: '2020', ingresos: 850000000, prev: 850000000, limiteInferior: 800000000, limiteSuperior: 900000000 },
  { year: '2021', ingresos: 900000000, prev: 900000000, limiteInferior: 850000000, limiteSuperior: 950000000 },
  { year: '2022', ingresos: 1000000000, prev: 1000000000, limiteInferior: 950000000, limiteSuperior: 1050000000 },
  { year: '2023', ingresos: 1100000000, prev: 1100000000, limiteInferior: 1050000000, limiteSuperior: 1150000000 },
  { year: '2024', ingresos: null, prev: 1200000000, limiteInferior: 1150000000, limiteSuperior: 1250000000 },
  { year: '2025', ingresos: null, prev: 1300000000, limiteInferior: 1250000000, limiteSuperior: 1350000000 },
];

const insights = [
  {
    icon: <FaChartLine className="text-3xl text-blue-400" />,
    title: "Crecimiento Consistente",
    description: "El crecimiento anual de los ingresos muestra una tendencia estable y positiva, lo cual es un signo de una estrategia empresarial sólida y de éxito en la retención de clientes."
  },
  {
    icon: <FaBullseye className="text-3xl text-green-400" />,
    title: "Proyección Positiva",
    description: "Con base en la proyección de ingresos, se espera que la empresa alcance $1,300 millones para 2025. Este incremento presenta una oportunidad para reinvertir en desarrollo de producto y expansión de mercado."
  },
  {
    icon: <FaShieldAlt className="text-3xl text-yellow-400" />,
    title: "Margen de Seguridad",
    description: "Los límites de confianza superior e inferior proporcionan un margen de seguridad que ayuda a planificar frente a posibles fluctuaciones del mercado."
  },
  {
    icon: <FaLightbulb className="text-3xl text-purple-400" />,
    title: "Recomendación Estratégica",
    description: "Aprovechar el crecimiento proyectado para diversificar la cartera de productos y explorar nuevas áreas geográficas. Mantener los niveles de apalancamiento bajo control."
  },
];

const ProgressCircle = ({ percentage, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full">
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="#ddd"
            strokeWidth="5"
            fill="transparent"
          />
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="#FFD700"
            strokeWidth="5"
            fill="transparent"
            strokeDasharray="219.91"
            strokeDashoffset={(1 - percentage / 100) * 219.91}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
          {percentage}%
        </span>
      </div>
      <p className="text-center mt-2">{label}</p>
    </div>
  );
};

const Report = () => {
  const [currentInsight, setCurrentInsight] = useState(0);

  const handleNextInsight = () => {
    setCurrentInsight((prev) => (prev + 1) % insights.length);
  };

  const handlePrevInsight = () => {
    setCurrentInsight((prev) => (prev - 1 + insights.length) % insights.length);
  };

  return (
    <div className="bg-[#13222E] text-white p-8 h-screen overflow-y-scroll">
      {/* Texto descriptivo y resultados semestrales */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4">RESULTADOS SEMESTRALES</h2>
        <p className="mb-4">
          Acá se encuentra el resumen de los ingresos de nuestra empresa en el último semestre.
          Estas ventas se registraron en los 35 puntos que tiene la empresa a nivel nacional y
          muestran los resultados así como los diferentes ratios financieros.
        </p>
        <div className="flex gap-16">
          <div>
            <h3 className="text-5xl font-bold">23%</h3>
            <p>fue el margen bruto del último periodo teniendo un aumento del 29% con respecto al periodo anterior</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">4,33%</h3>
            <p>fue el ROE del último periodo teniendo un aumento del 143% con respecto al periodo anterior</p>
          </div>
        </div>
      </div>

      {/* Gráfico de Líneas - ROA, ROE, Margen Neto */}
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="roa" stroke="#00CFFF" strokeWidth={2} name="ROA" />
            <Line type="monotone" dataKey="roe" stroke="#0074D9" strokeWidth={2} name="ROE" />
            <Line type="monotone" dataKey="margenNeto" stroke="#3D5AFE" strokeWidth={2} name="Margen Neto" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráficos circulares */}
      <div className="flex justify-around mb-8">
        <ProgressCircle percentage={85} label="APALANCAMIENTO FINANCIERO" />
        <ProgressCircle percentage={10} label="COSTO DE DEUDA INFERIDO" />
        <ProgressCircle percentage={18} label="MARGEN EBDITA" />
      </div>

      {/* Gráfico de Previsión de Ingresos */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4">PROYECCIÓN DE INGRESOS</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(value) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value)} />
            <Tooltip formatter={(value) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value)} />
            <Legend />
            <Line type="monotone" dataKey="ingresos" stroke="#8884d8" strokeWidth={2} name="Ingresos" />
            <Line type="monotone" dataKey="prev" stroke="#82ca9d" strokeWidth={2} strokeDasharray="5 5" name="Previsión" />
            <Line type="monotone" dataKey="limiteInferior" stroke="#d0d0d0" strokeWidth={1} strokeDasharray="3 3" name="Límite de confianza inferior" />
            <Line type="monotone" dataKey="limiteSuperior" stroke="#4d4d4d" strokeWidth={1} strokeDasharray="3 3" name="Límite de confianza superior" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Información de ganancias e insights */}
      <div className="text-center mt-8 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-2xl font-bold">GANANCIAS</h3>
        <p className="text-3xl font-bold mb-2">$393'060,40</p>
        <p className="text-sm">(+80 % respecto al periodo anterior)</p>
        <p className="mt-4">
          Las ganancias siguen presentando un crecimiento en comparación a sus otros periodos. Los ingresos proyectados alcanzarán aproximadamente $1,300 millones en 2025, con un intervalo de confianza entre $1,250 millones y $1,350 millones.
        </p>
      </div>

      {/* Apartado de Insights dinámicos */}
      <div className="mt-8 p-6 bg-gray-900 rounded-lg flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-4">
          <button onClick={handlePrevInsight} className="text-white">
            <FaArrowLeft />
          </button>
          <h3 className="text-2xl font-bold">{insights[currentInsight].title}</h3>
          <button onClick={handleNextInsight} className="text-white">
            <FaArrowRight />
          </button>
        </div>
        <div className="flex flex-col items-center">
          {insights[currentInsight].icon}
          <p className="mt-4 text-center">{insights[currentInsight].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
