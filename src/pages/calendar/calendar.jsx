import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      const citasParsed = JSON.parse(citasGuardadas);
      setCitas(citasParsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

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
    const horaInicio = 9;
    const horaFin = 17;
    const fechaActual = new Date();
    const diaSemana = fechaActual.getDay();

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
          horaCita.setHours(hora, 0, 0, 0);
          horas.push({
            label: horaCita.toLocaleString(),
            value: horaCita.getTime(),
          });
        }
      }
    }

    horas.sort(() => Math.random() - 0.5);
    setHorasDisponibles(horas.slice(0, 10));
  };

  const generarLinkMeetSimulado = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const part1 = Array.from({ length: 3 }, () =>
      characters[Math.floor(Math.random() * characters.length)]
    ).join('');
    const part2 = Array.from({ length: 4 }, () =>
      characters[Math.floor(Math.random() * characters.length)]
    ).join('');
    const part3 = Array.from({ length: 3 }, () =>
      characters[Math.floor(Math.random() * characters.length)]
    ).join('');
    return `https://meet.google.com/${part1}-${part2}-${part3}`;
  };

  const agendarCita = () => {
    if (areaSeleccionada && horaSeleccionada && tituloCita) {
      const nuevaCita = {
        area: areaSeleccionada,
        hora: horaSeleccionada,
        titulo: tituloCita,
        linkMeet: generarLinkMeetSimulado(),
      };
      setCitas([...citas, nuevaCita]);
      cerrarModal();
    }
  };

  const renderizarCelda = (fecha) => {
    const inicioDia = new Date(fecha);
    inicioDia.setHours(0, 0, 0, 0);
    const finDia = new Date(fecha);
    finDia.setHours(23, 59, 59, 999);

    const citasDelDia = citas.filter(
      (c) => c.hora >= inicioDia.getTime() && c.hora <= finDia.getTime()
    );

    if (citasDelDia.length > 0) {
      return (
        <ul className="lista-citas">
          {citasDelDia.map((cita, index) => (
            <li
              key={index}
              className={`cita cita-${cita.area}`}
            >
              <span className="titulo-cita">{cita.titulo}</span>
              <br />
              <a
                href={cita.linkMeet}
                target="_blank"
                rel="noopener noreferrer"
                className="link-azul"
              >
                Únete aquí
              </a>
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        className="bg-white p-4 rounded-lg shadow-md"
        style={{
          width: '900px', // Ajuste de ancho
          height: '600px', // Ajuste de altura para que sea cuadrado
          overflow: 'hidden', // Para que los elementos no desborden el cuadrado
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ReactCalendar
          className="texto-calendario"
          bordered
          renderCell={renderizarCelda}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <Button
        appearance="primary"
        onClick={abrirModal}
        style={{
          marginTop: 20,
          width: 'fit-content',
        }}
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
