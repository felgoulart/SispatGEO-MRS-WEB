import fileDownload from 'js-file-download';
import api from '../../services/api';


function download( url, file) => {
  api.get(url, { responseType: 'blob',})
    .then( res => {
      fileDownload(res.data, filename);
    })
};
