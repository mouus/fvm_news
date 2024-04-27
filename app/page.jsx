import Footer from "@/components/Footer";
import LatestNews from "@/components/Latest-news";
import Navbar from "@/components/Navbar";
import PastNews from "@/components/Past-news";
import PopularNews from "@/components/Popular-news";

export default function Home() {
  return (
    <main className="flex-col max-w-screen-lg mx-auto">
      <div className="flex">
      <div className="max-w-lg bg-gray-400 mr-3 mt-2">
          <img src="https://dummyimage.com/640x360/000/aaa" width={600} height={400} />
            <div className="max-w-lg  h-[164px] bg-gray-400 mr-3 mt-2">
                <h2 className="mt-2 font-bold">ހެޑް ލައިން</h2>
                <p className="mt-2 "> ދސފސދފަސފސަފ ސަފސަަފސދަފަސފސަފސަފސަފދަފދސަީ އުެރމެއެކެލފދސޖޕފޮޖކދފޖަސޖދފސަފސފ</p>
            </div>
        </div>
        <div className="max-w-lg max-h-40 mr-3 mt-2">

        <div className="flex bg-gray-400 ">
            <img src="https://dummyimage.com/640x360/000/aaa" width={250} height={200} />
            <div className="max-h-32 overflow-hidden">
              <h2 className="mr-2 font-bold">ހެޑް ލައިން</h2>
              <p className="mt-1 mr-2 p-1 font-sans "> ލ. އަތޮޅުގެ ސިޔާސީ ތާރީހު ބަދަލުކޮށްލެއްވީ ރައީސް ޑރ. މުހައްމަދު މުއިއްޒު ކަމަށާއި ރާއްޖޭގެ އެންމެ މަތީ ފަޑިން އެ އަތޮޅުގެ މީހުންނަށް ފުރުސަތު ހޯއްދަވައި ދެއްވީ ވެސް އެ މަނިކުފާނު ކަމަށް ރައީސްގެ ސްޕެޝަލް އެޑްވައިޒަރު އަބްދުއްރަހީމް އަބްދުﷲ (އަދުރޭ) ރޭ ވިދާޅުވެއްޖެ އެވެ.</p>
            </div>
          </div>

          <div className="flex bg-gray-400 mt-3">
            <img src="https://dummyimage.com/640x360/000/aaa" width={250} height={200} />
            <div>
              <h2 className="mr-2 font-bold">ހެޑް ލައިން</h2>
              <p className="mt-1 mr-2 "> ދސފސދފަސފސަފ ސަފސަަފސދަފަސފސަފސަފސަފދަފދސަީ އުެރމެއެކެލފދސޖޕފޮޖކދފޖަސޖދފސަފސފ</p>
            </div>
          </div>
          
          <div className="flex bg-gray-400 mt-3">
            <img src="https://dummyimage.com/640x360/000/aaa" width={250} height={200} />
            <div>
              <h2 className="mr-2 font-bold">ހެޑް ލައިން</h2>
              <p className="mt-1 mr-2 "> ދސފސދފަސފސަފ ސަފސަަފސދަފަސފސަފސަފސަފދަފދސަީ އުެރމެއެކެލފދސޖޕފޮޖކދފޖަސޖދފސަފސފ</p>
            </div>
          </div>
        </div>
      </div>
      <PopularNews />
      <LatestNews />
      <PastNews />
      <Footer />
        
    </main>
  );
}
