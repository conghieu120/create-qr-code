import './App.css'
import QRCode from "react-qr-code";

const datas = [
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
  { link: 'https://google.com', title: 'Google' },
]

function App() {

  return (
    <section className='container m-auto max-w-2xl p-4'>
      <ul className='flex gap-8 flex-wrap'>
        {
          datas.map((el, index) => (
            <li key={index}>
              <QRCode
                size={80}
                style={{ height: "auto", }}
                value={el.link}
                viewBox={`0 0 80 80`}
                className='m-auto'
              />
              <p className='text-center mt-1 text-sm'>Scan QR</p>
              <p className='text-center text-sm mt-4'>{el.title}</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default App
