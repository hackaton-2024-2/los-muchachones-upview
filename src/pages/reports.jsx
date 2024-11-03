import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';
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

const circleData = [
  { name: 'APALANCAMIENTO FINANCIERO', value: 85, color: '#b374de' },
  { name: 'COSTO DE DEUDA INFERIDO', value: 10, color: '#b374de' },
  { name: 'MARGEN EBDITA', value: 18, color: '#b374de' },
];

const traceabilityData = [
  { date: '2024-01-10', event: 'Reunión de planificación estratégica' },
  { date: '2024-02-05', event: 'Subida de documentos financieros' },
  { date: '2024-03-12', event: 'Generación de reporte semanal de actividades' },
  { date: '2024-04-20', event: 'Revisión de resultados del Q1' },
  { date: '2024-05-15', event: 'Subida de acta de reunión mensual' },
];

const meetingMinutes = {
  '2024-01-10': {
    tema: 'Planificación Estratégica 2024',
    tareas: ['Definir objetivos trimestrales', 'Asignar responsables para cada área', 'Establecer métricas de rendimiento'],
    otrosDatos: 'Participantes: Directores de cada área, CEO',
  },
  '2024-02-05': {
    tema: 'Actualización de Documentos Financieros',
    tareas: ['Subir reporte financiero Q4 2023', 'Revisar ratios financieros actuales', 'Preparar presentación para stakeholders'],
    otrosDatos: 'Participantes: Equipo financiero, CFO',
  },
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow-md text-black">
        <p className="font-bold">{`Año: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Report = () => {
  const [currentInsight, setCurrentInsight] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleNextInsight = () => {
    setCurrentInsight((prev) => (prev + 1) % insights.length);
  };

  const handlePrevInsight = () => {
    setCurrentInsight((prev) => (prev - 1 + insights.length) % insights.length);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
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

      {/* Gráficos Circulares */}
      <div className="flex justify-around mb-8">
        {circleData.map((data, index) => (
          <div key={index} className="text-center">
            <PieChart width={100} height={100}>
              <Pie
                data={[{ value: data.value }, { value: 100 - data.value }]}
                innerRadius={30}
                outerRadius={40}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                <Cell key={`cell-${index}-filled`} fill={data.color} />
                <Cell key={`cell-${index}-empty`} fill="#e0e0e0" />
              </Pie>
            </PieChart>
            <p className="text-2xl font-bold">{data.value}%</p>
            <p className="mt-2">{data.name}</p>
          </div>
        ))}
      </div>

      {/* Gráfico de Líneas - ROA, ROE, Margen Neto */}
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="roa" stroke="#00CFFF" strokeWidth={2} name="ROA" />
            <Line type="monotone" dataKey="roe" stroke="#0074D9" strokeWidth={2} name="ROE" />
            <Line type="monotone" dataKey="margenNeto" stroke="#3D5AFE" strokeWidth={2} name="Margen Neto" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Información de ganancias */}
      <div className="text-center mt-8 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-2xl font-bold">GANANCIAS</h3>
        <p className="text-3xl font-bold mb-2">$393'060,40</p>
        <p className="text-sm">(+80 % respecto al periodo anterior)</p>
        <p className="mt-4">
          Las ganancias siguen presentando un crecimiento en comparación a sus otros periodos. Los ingresos proyectados alcanzarán aproximadamente $1,300 millones en 2025, con un intervalo de confianza entre $1,250 millones y $1,350 millones.
        </p>
      </div>

     {/* Apartado de Trazabilidad */}
    <div className="mt-12 mb-8 p-4 rounded-lg h-48 overflow-y-auto  border border-black">
      <h3 className="text-2xl font-bold mb-4">Trazabilidad del Emprendimiento</h3>
      <ul>
        {traceabilityData.map((item, index) => (
          <li key={index} className="mb-2">{`${item.date}: ${item.event}`}</li>
        ))}
      </ul>
    </div>




      {/* Dropdown de Actas de Reuniones */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Actas de Reuniones</h3>
        <select
          onChange={(e) => handleSelectDate(e.target.value)}
          value={selectedDate || 'Seleccione una fecha'}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option disabled>Seleccione una fecha</option>
          {Object.keys(meetingMinutes).map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
        {selectedDate && (
          <div className="mt-4 bg-gray-900 p-4 rounded">
            <h4 className="text-xl font-bold">Acta del {selectedDate}</h4>
            <p><strong>Tema:</strong> {meetingMinutes[selectedDate].tema}</p>
            <p><strong>Tareas:</strong></p>
            <ul>
              {meetingMinutes[selectedDate].tareas.map((tarea, index) => (
                <li key={index}>- {tarea}</li>
              ))}
            </ul>
            <p><strong>Otros Datos:</strong> {meetingMinutes[selectedDate].otrosDatos}</p>
          </div>
        )}
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
