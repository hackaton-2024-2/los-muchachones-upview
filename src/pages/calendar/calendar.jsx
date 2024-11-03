import React, { useState } from 'react';
import {
  Calendar as ReactCalendar,
  Modal,
  Button,
  SelectPicker,
  Input,
} from 'rsuite';

import 'rsuite/dist/rsuite.min.css';
import './calendarOverrides.css';

const Calendar = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [areaSeleccionada, setAreaSeleccionada] = useState(null);
  const [horasDisponibles, setHorasDisponibles] = useState([]);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);
  const [tituloCita, setTituloCita] = useState('');
  const [citas, setCitas] = useState([]);

  const areas = [
    { label: 'Marketing', value: 'marketing' },
    { label: 'Legal', value: 'legal' },
    { label: 'Comercio', value: 'comercio' },
    { label: 'Financiera', value: 'financiera' },
  ];

  const abrirModal = () => {
    generarHorasAleatorias();
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setAreaSeleccionada(null);
    setHoraSeleccionada(null);
    setTituloCita('');
  };

  const generarHorasAleatorias = () => {
    const horas = [];
    const horaInicio = 9; // 9 AM
    const horaFin = 17; // 5 PM
    const fechaActual = new Date();
    const diaSemana = fechaActual.getDay();

    // Ajustar al siguiente día hábil si es fin de semana
    if (diaSemana === 6) {
      fechaActual.setDate(fechaActual.getDate() + 2);
    } else if (diaSemana === 0) {
      fechaActual.setDate(fechaActual.getDate() + 1);
    }

    for (let i = 0; i < 5; i++) {
      const fecha = new Date(fechaActual);
      fecha.setDate(fechaActual.getDate() + i);
      const dia = fecha.getDay();
      if (dia !== 0 && dia !== 6) {
        for (let hora = horaInicio; hora <= horaFin; hora++) {
          const horaCita = new Date(fecha);
          horaCita.setHours(hora);
          horaCita.setMinutes(0);
          horaCita.setSeconds(0);
          horaCita.setMilliseconds(0);
          horas.push({
            label: horaCita.toLocaleString(),
            value: horaCita.toISOString(),
          });
        }
      }
    }

    // Mezclar las horas para hacerlas aleatorias
    horas.sort(() => Math.random() - 0.5);
    // Limitar a 10 horas aleatorias
    setHorasDisponibles(horas.slice(0, 10));
  };

  const agendarCita = () => {
    if (areaSeleccionada && horaSeleccionada && tituloCita) {
      const hora = new Date(horaSeleccionada);
      const nuevaCita = {
        area: areaSeleccionada,
        hora: hora,
        titulo: tituloCita,
      };
      setCitas([...citas, nuevaCita]);
      cerrarModal();
    }
  };

  const renderizarCelda = (fecha) => {
    const citasDelDia = citas.filter(
      (c) =>
        c.hora.getFullYear() === fecha.getFullYear() &&
        c.hora.getMonth() === fecha.getMonth() &&
        c.hora.getDate() === fecha.getDate()
    );
    if (citasDelDia.length > 0) {
      return (
        <ul className="lista-citas">
          {citasDelDia.map((cita, index) => (
            <li key={index} className="cita">
              <span className="titulo-cita">{cita.titulo}</span>
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center self-center">
      <ReactCalendar
        className="bg-white texto-calendario"
        bordered
        renderCell={renderizarCelda}
      />

      <Button
        appearance="primary"
        onClick={abrirModal}
        style={{ marginTop: 20 }}
      >
        Agendar una cita
      </Button>

      <Modal open={mostrarModal} onClose={cerrarModal} centered>
        <Modal.Header>
          <Modal.Title>Agendar una cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            placeholder="Título de la cita"
            value={tituloCita}
            onChange={(value) => setTituloCita(value)}
            style={{ marginBottom: 10, color: 'black' }}
          />
          <SelectPicker
            data={areas}
            style={{ width: '100%', marginBottom: 10, color: 'black' }}
            placeholder="Seleccione un área"
            value={areaSeleccionada}
            onChange={setAreaSeleccionada}
            searchable={false}
            menuStyle={{ backgroundColor: 'white' }}
            renderMenuItem={(label, item) => (
              <div style={{ color: 'black' }}>{label}</div>
            )}
            renderValue={(value) => {
              const item = areas.find((a) => a.value === value);
              return <span style={{ color: 'black' }}>{item.label}</span>;
            }}
          />
          <SelectPicker
            data={horasDisponibles}
            style={{ width: '100%', color: 'black' }}
            placeholder="Seleccione una hora"
            value={horaSeleccionada}
            onChange={setHoraSeleccionada}
            renderMenuItem={(label, item) => (
              <div style={{ color: 'black' }}>
                <strong style={{ color: 'black' }}>
                  {new Date(item.value).toLocaleDateString()}
                </strong>{' '}
                -{' '}
                {new Date(item.value).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            )}
            menuStyle={{ backgroundColor: 'white' }}
            searchable={false}
            renderValue={(value) => {
              const item = horasDisponibles.find((h) => h.value === value);
              return (
                <span style={{ color: 'black' }}>
                  <strong style={{ color: 'black' }}>
                    {new Date(item.value).toLocaleDateString()}
                  </strong>{' '}
                  -{' '}
                  {new Date(item.value).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              );
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={agendarCita} appearance="primary">
            Confirmar
          </Button>
          <Button onClick={cerrarModal} appearance="subtle">
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Calendar;
