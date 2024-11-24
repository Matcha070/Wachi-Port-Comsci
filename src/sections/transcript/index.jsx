import p1 from '../../assets/462548788_1205137413885804_6004825407260140422_n.jpg'
import p2 from '../../assets/462579791_872990638350211_1221279765344245531_n.jpg'

const TNS = () =>{
    return(
        <div className="mx-5 mb-3 scroll-m-10" id = 'ระเบียนแสดงผลการศึกษา(ปพ.1)-section'><div className='mb-3 text-2xl font-semibold text-skyblue'><span className="px-2 py-0 transition-all rounded-md hover:scale-125 hover:bg-darkblue">ระเบียนแสดงผลการศึกษา(ปพ.1)</span></div>
        <div className="gap-4 lg:flex w-96">
            <img src={p1} alt="Image 1" />
            <img src={p2} alt="Image 2" />
        </div>
        </div>
    )
}

export default TNS;