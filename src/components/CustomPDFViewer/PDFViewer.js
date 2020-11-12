import { useEffect } from 'react';
// import { useParams } from 'react-router';
import api from './services/api';

const baseURL = process.env.REACT_APP_BASE_URL;

// const id = 9059;
const id = sessionStorage.getItem('@sispatgeo-app/iddoc');
console.log('Session Storage PDFViewer: ', id);

function PDFViewer_X() {
  // const { id } = useParams();

  useEffect(() => {
    api.get(`/documentos/exibe/${id}`, {
      type: 'application/pdf'
    })
      .then(res => {
        // console.log("Resultado: ", res.data);
        const file = res.data.map(x => x.Nome);
        const fileURL = `${baseURL}/uploads/documents/${file}`;
        window.open(fileURL);
      });
  }, []);

  return (null);
};

export default PDFViewer_X;
