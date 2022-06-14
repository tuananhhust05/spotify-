
import './App.css'
import Navbar from './components/Navbar'
import DetailSong from './components/DetailSong'
import ListSong from './components/ListSong'
import Playing from "./components/Playing"
import DataSongs from "./data/songs.json" // lấy data
import  { Songs } from "./Context"  // impory context để truyền dữ liệu xuống cho thăng components con
import { useState } from "react"
// dùng dấu chấm phẩy trong import thư viện sẽ gây lỗi
function App() {

  const [song, setSong] = useState(DataSongs[0]) // đưa vào 1 object 

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)  // tìm dựa theo id trong db
    if(!song)   // nếu idSong không tồn tại thì set thằng đầu tiên là thằng đc chọn 
           setSong(DataSongs[0])
    else
          {setSong(song);
          console.log(song)
          }
   }
  return (  // component là những hàm trả về jsx 
  // truyền dữ liệu cho các component
  // truyền dữ liệu song, handleSetSong là các thằng global state; thay đổi trong list song có thể dẫn tới thay đổi trong detail song 
   <div className="App">
     <Songs.Provider value={{ DataSongs, song, handleSetSong}}>  
        <Navbar/>
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player">
          {/*span1 => Cách comment*/}
            <DetailSong/>
          {/*span2 => Cách comment*/}
            <ListSong/>
        </div>
        <Playing/>
     </Songs.Provider>
   </div>
  
    
  );
}

export default App;
