import alertas from '../data/alertas.json'

function Alertas() {
  return (
    <div>
      {alertas.map(a => (
        <div key={a.id} style={{ border: '1px solid gray', margin: 10, padding: 10 }}>
          <strong>{a.local}</strong><br />
          Tipo: {a.tipo}<br />
          Estado: {a.estado}<br />
          Hora: {a.hora}
        </div>
      ))}
    </div>
  )
}

export default Alertas
