export default function Map( { onClickHandler } : { onClickHandler : React.MouseEventHandler<SVGGElement>}){
  return (
    <div>
      <svg id="map" width="800" height="600" viewBox="650 100 800 1200">
        <style jsx>
          {`
            rect {
              stroke: #fff;
              stroke-width: 2px;
              fill-rule: evenodd;
            }
            g:hover rect {
              stroke: #000;
            }

            .cls-1 {
              fill: #0008ff;
            }

            .cls-2,
            .cls-3 {
              fill: #fff;
              font-size: 20px;
              text-anchor: middle;
              cursor: default;
              -webkit-user-select: none;  /* Chrome all / Safari all */
              -moz-user-select: none;     /* Firefox all */
              -ms-user-select: none;      /* IE 10+ */
              user-select: none;   
            }

            .cls-3 {
              fill: #000;
              // font-weight: 700;
            }

            .cls-3,
            .cls-5 {
              font-family: Arial;
              -webkit-user-select: none;  /* Chrome all / Safari all */
              -moz-user-select: none;     /* Firefox all */
              -ms-user-select: none;      /* IE 10+ */
              user-select: none;   
            }

            .cls-4 {
              fill: #ff002a;
            }

            .cls-5 {
              font-size: 24px;
              // fill: #d1d5db;
              fill: #000;
            }

            .cls-6 {
              fill: #15a000;
            }

            .cls-7 { 
              // fill: #006a8e; // GTA - Pejuang
              fill: #515151;
            }

            .cls-8 { 
              // fill: #ef0070; 
              fill: #031e61;
            }

            .cls-9 {
              fill: #515151;
            }

            .cls-10 {
              fill: #031e61;
            }

            .cls-11 {
              fill: #a800ff;
            }

            .cls-13 {
              fill: #a4e5fc;
            }

            .cls-14 {
              fill: #78ff00;
            }

            .cls-15 {
              fill: #f17d03;
            }

            .cls-16 {
              fill: #cec30f;
            }
          `}
        </style>

        <text id="Perlis" data-name="Perlis" className="cls-5" x="393.167" y="119.772">Perlis</text>
        <g onClick={onClickHandler} id="0"><rect id="Padang_Besar" data-name="Padang Besar" className="cls-1" x="480" y="100" width="39" height="39"/><text className="cls-2" x="500" y="127">001</text></g>
        <g onClick={onClickHandler} id="1"><rect id="Kangar" data-name="Kangar" className="cls-4" x="440" y="140" width="39" height="39"/><text className="cls-2" x="460" y="167">002</text></g>
        <g onClick={onClickHandler} id="2"><rect id="Arau" data-name="Arau" className="cls-1" x="480" y="140" width="39" height="39"/><text className="cls-2" x="500" y="167">003</text></g>

        <text id="Kedah" data-name="Kedah" className="cls-5" x="570.168" y="205.772">Kedah</text>
        <g onClick={onClickHandler} id="3"><rect id="Langkawi" data-name="Langkawi" className="cls-7" x="400" y="220" width="39" height="39"/><text className="cls-2" x="420" y="247">004</text></g>
        <g onClick={onClickHandler} id="4"><rect id="Jerlun" data-name="Jerlun" className="cls-7" x="480" y="220" width="39" height="39"/><text className="cls-2" x="500" y="247">005</text></g>
        <g onClick={onClickHandler} id="5"><rect id="Kubang_Pasu" data-name="Kubang Pasu" className="cls-7" x="520" y="220" width="39" height="39"/><text className="cls-2" x="540" y="247">006</text></g>
        <g onClick={onClickHandler} id="6"><rect id="Padang_Terap" data-name="Padang Terap" className="cls-1" x="560" y="220" width="39" height="39"/><text className="cls-2" x="580" y="247">007</text></g>
        <g onClick={onClickHandler} id="7"><rect id="Pokok_Sena" data-name="Pokok Sena" className="cls-4" x="600" y="220" width="39" height="39"/><text className="cls-2" x="620" y="247">008</text></g>
        <g onClick={onClickHandler} id="8"><rect id="Alor_Setar" data-name="Alor Setar" className="cls-4" x="480" y="260" width="39" height="39"/><text className="cls-2" x="500" y="287">009</text></g>
        <g onClick={onClickHandler} id="9"><rect id="Kuala_Kedah" data-name="Kuala Kedah" className="cls-4" x="520" y="260" width="39" height="39"/><text className="cls-2" x="540" y="287">010</text></g>
        <g onClick={onClickHandler} id="10"><rect id="Pendang" data-name="Pendang" className="cls-6" x="560" y="260" width="39" height="39"/><text className="cls-2" x="580" y="287">011</text></g>
        <g onClick={onClickHandler} id="11"><rect id="Jerai" data-name="Jerai" className="cls-6" x="600" y="260" width="39" height="39"/><text className="cls-2" x="620" y="287">012</text></g>
        <g onClick={onClickHandler} id="12"><rect id="Sik" data-name="Sik" className="cls-6" x="520" y="300" width="39" height="39"/><text className="cls-2" x="540" y="327">013</text></g>
        <g onClick={onClickHandler} id="13"><rect id="Merbok" data-name="Merbok" className="cls-4" x="560" y="300" width="39" height="39"/><text className="cls-2" x="580" y="327">014</text></g>
        <g onClick={onClickHandler} id="14"><rect id="Sungai_Petani" data-name="Sungai Petani" className="cls-4" x="600" y="300" width="39" height="39"/><text className="cls-2" x="620" y="327">015</text></g>
        <g onClick={onClickHandler} id="15"><rect id="Baling" data-name="Baling" className="cls-4" x="520" y="340" width="39" height="39"/><text className="cls-2" x="540" y="367">016</text></g>
        <g onClick={onClickHandler} id="16"><rect id="Padang_Serai" data-name="Padang Serai" className="cls-1" x="560" y="340" width="39" height="39"/><text className="cls-2" x="580" y="367">017</text></g>
        <g onClick={onClickHandler} id="17"><rect id="Kulim-Bandar_Baharu" data-name="Kulim-Bandar Baharu" className="cls-4" x="520" y="380" width="39" height="39"/><text className="cls-2" x="540" y="407">018</text></g>


        <text id="Kelantan" data-name="Kelantan" className="cls-5" x="757.169" y="279.772">Kelantan</text>
        <g onClick={onClickHandler} id="18"><rect id="Tumpat" data-name="Tumpat" className="cls-6" x="760" y="300" width="39" height="39"/><text className="cls-2" x="780" y="327">019</text></g>
        <g onClick={onClickHandler} id="19"><rect id="Pengakalan_Chepa" data-name="Pengakalan Chepa" className="cls-6" x="800" y="300" width="39" height="39"/><text className="cls-2" x="820" y="327">020</text></g>
        <g onClick={onClickHandler} id="20"><rect id="Kota_Bharu" data-name="Kota Bharu" className="cls-6" x="720" y="340" width="39" height="39"/><text className="cls-2" x="740" y="367">021</text></g>
        <g onClick={onClickHandler} id="21"><rect id="Pasir_Mas" data-name="Pasir Mas" className="cls-6" x="760" y="340" width="39" height="39"/><text className="cls-2" x="780" y="367">022</text></g>
        <g onClick={onClickHandler} id="22"><rect id="Rantau_Panjang" data-name="Rantau Panjang" className="cls-6" x="800" y="340" width="39" height="39"/><text className="cls-2" x="820" y="367">023</text></g>
        <g onClick={onClickHandler} id="23"><rect id="Kubang_Kerian" data-name="Kubang Kerian" className="cls-6" x="720" y="380" width="39" height="39"/><text className="cls-2" x="740" y="407">024</text></g>
        <g onClick={onClickHandler} id="24"><rect id="Bachok" data-name="Bachok" className="cls-6" x="760" y="380" width="39" height="39"/><text className="cls-2" x="780" y="407">025</text></g>
        <g onClick={onClickHandler} id="25"><rect id="Ketereh" data-name="Ketereh" className="cls-1" x="720" y="420" width="39" height="39"/><text className="cls-2" x="740" y="447">026</text></g>
        <g onClick={onClickHandler} id="26"><rect id="Tanah_Merah" data-name="Tanah Merah" className="cls-8" x="760" y="420" width="39" height="39"/><text className="cls-2" x="780" y="447">027</text></g>
        <g onClick={onClickHandler} id="27"><rect id="Pasir_Puteh" data-name="Pasir Puteh" className="cls-6" x="720" y="460" width="39" height="39"/><text className="cls-2" x="740" y="487">028</text></g>
        <g onClick={onClickHandler} id="28"><rect id="Machang" data-name="Machang" className="cls-1" x="760" y="460" width="39" height="39"/><text className="cls-2" x="780" y="487">029</text></g>
        <g onClick={onClickHandler} id="29"><rect id="Jeli" data-name="Jeli" className="cls-8" x="680" y="500" width="39" height="39"/><text className="cls-2" x="700" y="527">030</text></g>
        <g onClick={onClickHandler} id="30"><rect id="Kuala_Krai" data-name="Kuala Krai" className="cls-6" x="720" y="500" width="39" height="39"/><text className="cls-2" x="740" y="527">031</text></g>
        <g onClick={onClickHandler} id="31"><rect id="Gua_Musang" data-name="Gua Musang" className="cls-1" x="760" y="500" width="39" height="39"/><text className="cls-2" x="780" y="527">032</text></g>

        <text id="Tganu" data-name="T’ganu" className="cls-5" x="900.168" y="438.772">T’ganu</text>
        <g onClick={onClickHandler} id="32"><rect id="Besut" data-name="Besut" className="cls-1" x="840" y="420" width="39" height="39"/><text className="cls-2" x="860" y="447">033</text></g>
        <g onClick={onClickHandler} id="33"><rect id="Setiu" data-name="Setiu" className="cls-6" x="840" y="460" width="39" height="39"/><text className="cls-2" x="860" y="487">034</text></g>
        <g onClick={onClickHandler} id="34"><rect id="Kuala_Nerus" data-name="Kuala Nerus" className="cls-9" x="880" y="460" width="39" height="39"/><text className="cls-2" x="900" y="487">035</text></g>
        <g onClick={onClickHandler} id="35"><rect id="Kuala_Terengganu" data-name="Kuala Terengganu" className="cls-6" x="840" y="500" width="39" height="39"/><text className="cls-2" x="860" y="527">036</text></g>
        <g onClick={onClickHandler} id="36"><rect id="Marang" data-name="Marang" className="cls-6" x="880" y="500" width="39" height="39"/><text className="cls-2" x="900" y="527">037</text></g>
        <g onClick={onClickHandler} id="37"><rect id="Hulu_Terrenganu" data-name="Hulu Terrenganu" className="cls-8" x="840" y="540" width="39" height="39"/><text className="cls-2" x="860" y="567">038</text></g>
        <g onClick={onClickHandler} id="38"><rect id="Dungun" data-name="Dungun" className="cls-6" x="880" y="540" width="39" height="39"/><text className="cls-2" x="900" y="567">039</text></g>
        <g onClick={onClickHandler} id="39"><rect id="Kemaman" data-name="Kemaman" className="cls-6" x="880" y="580" width="39" height="39"/><text className="cls-2" x="900" y="607">040</text></g>

        <text id="P.Pinang" data-name="P. Pinang" className="cls-5" x="281.167" y="319.772">P. Pinang</text>
        <g onClick={onClickHandler} id="40"><rect id="Kepala_Batas" data-name="Kepala Batas" className="cls-1" x="400" y="300" width="39" height="39"/><text className="cls-2" x="420" y="327">041</text></g>
        <g onClick={onClickHandler} id="41"><rect id="Tasek_Gelugor" data-name="Tasek Gelugor" className="cls-8" x="400" y="340" width="39" height="39"/><text className="cls-2" x="420" y="367">042</text></g>
        <g onClick={onClickHandler} id="42"><rect id="Bagan" data-name="Bagan" className="cls-1" x="440" y="340" width="39" height="39"/><text className="cls-2" x="460" y="367">043</text></g>
        <g onClick={onClickHandler} id="43"><rect id="Permatang_Pauh" data-name="Permatang Pauh" className="cls-4" x="400" y="380" width="39" height="39"/><text className="cls-2" x="420" y="407">044</text></g>
        <g onClick={onClickHandler} id="44"><rect id="Bukit_Mertajam" data-name="Bukit Mertajam" className="cls-4" x="440" y="380" width="39" height="39"/><text className="cls-2" x="460" y="407">045</text></g>
        <g onClick={onClickHandler} id="45"><rect id="Batu_Kawan" data-name="Batu Kawan" className="cls-4" x="400" y="420" width="39" height="39"/><text className="cls-2" x="420" y="447">046</text></g>
        <g onClick={onClickHandler} id="46"><rect id="Nibong_Tebal" data-name="Nibong Tebal" className="cls-4" x="440" y="420" width="39" height="39"/><text className="cls-2" x="460" y="447">047</text></g>
        <g onClick={onClickHandler} id="47"><rect id="Bukit_Bendera" data-name="Bukit Bendera" className="cls-4" x="280" y="340" width="39" height="39"/><text className="cls-2" x="300" y="367">048</text></g>
        <g onClick={onClickHandler} id="48"><rect id="Tanjong" data-name="Tanjong" className="cls-4" x="320" y="340" width="39" height="39"/><text className="cls-2" x="340" y="367">049</text></g>
        <g onClick={onClickHandler} id="49"><rect id="Jelutong" data-name="Jelutong" className="cls-4" x="280" y="380" width="39" height="39"/><text className="cls-2" x="300" y="407">050</text></g>
        <g onClick={onClickHandler} id="50"><rect id="Bukit_Gelugor" data-name="Bukit Gelugor" className="cls-4" x="320" y="380" width="39" height="39"/><text className="cls-2" x="340" y="407">051</text></g>
        <g onClick={onClickHandler} id="51"><rect id="Bayan_Baru" data-name="Bayan Baru" className="cls-4" x="280" y="420" width="39" height="39"/><text className="cls-2" x="300" y="447">052</text></g>
        <g onClick={onClickHandler} id="52"><rect id="Balik_Pulau" data-name="Balik Pulau" className="cls-4" x="320" y="420" width="39" height="39"/><text className="cls-2" x="340" y="447">053</text></g>
        
        <text id="Perak" data-name="Perak" className="cls-5" x="389.169" y="568.771">Perak</text>
        <g onClick={onClickHandler} id="53"><rect id="Gerik" data-name="Gerik" className="cls-1" x="640" y="380" width="39" height="39"/><text className="cls-2" x="660" y="407">054</text></g>
        <g onClick={onClickHandler} id="54"><rect id="Lenggong" data-name="Lenggong" className="cls-1" x="600" y="420" width="39" height="39"/><text className="cls-2" x="620" y="447">055</text></g>
        <g onClick={onClickHandler} id="55"><rect id="Larut" data-name="Larut" className="cls-8" x="640" y="420" width="39" height="39"/><text className="cls-2" x="660" y="447">056</text></g>
        <g onClick={onClickHandler} id="56"><rect id="Parit_Buntar" data-name="Parit Buntar" className="cls-4" x="520" y="460" width="39" height="39"/><text className="cls-2" x="540" y="487">057</text></g>
        <g onClick={onClickHandler} id="57"><rect id="Bagan_Serai" data-name="Bagan Serai" className="cls-8" x="560" y="460" width="39" height="39"/><text className="cls-2" x="580" y="487">058</text></g>
        <g onClick={onClickHandler} id="58"><rect id="Bukit_Gantang" data-name="Bukit Gantang" className="cls-8" x="600" y="460" width="39" height="39"/><text className="cls-2" x="620" y="487">059</text></g>
        <g onClick={onClickHandler} id="59"><rect id="Taiping" data-name="Taiping" className="cls-4" x="480" y="500" width="39" height="39"/><text className="cls-2" x="500" y="527">060</text></g>
        <g onClick={onClickHandler} id="60"><rect id="Padang_Rengas" data-name="Padang Rengas" className="cls-1" x="520" y="500" width="39" height="39"/><text className="cls-2" x="540" y="527">061</text></g>
        <g onClick={onClickHandler} id="61"><rect id="Sungai_Siput" data-name="Sungai Siput" className="cls-4" x="560" y="500" width="39" height="39"/><text className="cls-2" x="580" y="527">062</text></g>
        <g onClick={onClickHandler} id="62"><rect id="Tambun" data-name="Tambun" className="cls-8" x="600" y="500" width="39" height="39"/><text className="cls-2" x="620" y="527">063</text></g>
        <g onClick={onClickHandler} id="63"><rect id="Ipoh_Timur" data-name="Ipoh Timur" className="cls-4" x="480" y="540" width="39" height="39"/><text className="cls-2" x="500" y="567">064</text></g>
        <g onClick={onClickHandler} id="64"><rect id="Ipoh_Barat" data-name="Ipoh Barat" className="cls-4" x="520" y="540" width="39" height="39"/><text className="cls-2" x="540" y="567">065</text></g>
        <g onClick={onClickHandler} id="65"><rect id="Batu_Gajah" data-name="Batu Gajah" className="cls-4" x="560" y="540" width="39" height="39"/><text className="cls-2" x="580" y="567">066</text></g>
        <g onClick={onClickHandler} id="66"><rect id="Kuala_Kangsar" data-name="Kuala Kangsar" className="cls-1" x="600" y="540" width="39" height="39"/><text className="cls-2" x="620" y="567">067</text></g>
        <g onClick={onClickHandler} id="67"><rect id="Beruas" data-name="Beruas" className="cls-4" x="480" y="580" width="39" height="39"/><text className="cls-2" x="500" y="607">068</text></g>
        <g onClick={onClickHandler} id="68"><rect id="Parit" data-name="Parit" className="cls-1" x="520" y="580" width="39" height="39"/><text className="cls-2" x="540" y="607">069</text></g>
        <g onClick={onClickHandler} id="69"><rect id="Kampar" data-name="Kampar" className="cls-4" x="560" y="580" width="39" height="39"/><text className="cls-2" x="580" y="607">070</text></g>
        <g onClick={onClickHandler} id="70"><rect id="Gopeng" data-name="Gopeng" className="cls-4" x="600" y="580" width="39" height="39"/><text className="cls-2" x="620" y="607">071</text></g>
        <g onClick={onClickHandler} id="71"><rect id="Tapah" data-name="Tapah" className="cls-1" x="640" y="580" width="39" height="39"/><text className="cls-2" x="660" y="607">072</text></g>
        <g onClick={onClickHandler} id="72"><rect id="Pasir_Salak" data-name="Pasir Salak" className="cls-1" x="480" y="620" width="39" height="39"/><text className="cls-2" x="500" y="647">073</text></g>
        <g onClick={onClickHandler} id="73"><rect id="Lumut" data-name="Lumut" className="cls-4" x="520" y="620" width="39" height="39"/><text className="cls-2" x="540" y="647">074</text></g>
        <g onClick={onClickHandler} id="74"><rect id="Bagan_Datuk" data-name="Bagan Datuk" className="cls-1" x="560" y="620" width="39" height="39"/><text className="cls-2" x="580" y="647">075</text></g>
        <g onClick={onClickHandler} id="75"><rect id="Teluk_Intan" data-name="Teluk Intan" className="cls-4" x="600" y="620" width="39" height="39"/><text className="cls-2" x="620" y="647">076</text></g>
        <g onClick={onClickHandler} id="76"><rect id="Tanjong_Malim" data-name="Tanjong Malim" className="cls-4" x="640" y="620" width="39" height="39"/><text className="cls-2" x="660" y="647">077</text></g>
        
        <text id="Pahang" data-name="Pahang" className="cls-5" x="940.168" y="717.772">Pahang</text>
        <g onClick={onClickHandler} id="77"><rect id="Cameron_Highlands" data-name="Cameron Highlands" className="cls-1" x="720" y="580" width="39" height="39"/><text className="cls-2" x="740" y="607">078</text></g>
        <g onClick={onClickHandler} id="78"><rect id="Lipis" data-name="Lipis" className="cls-1" x="760" y="580" width="39" height="39"/><text className="cls-2" x="780" y="607">079</text></g>
        <g onClick={onClickHandler} id="79"><rect id="Raub" data-name="Raub" className="cls-4" x="720" y="620" width="39" height="39"/><text className="cls-2" x="740" y="647">080</text></g>
        <g onClick={onClickHandler} id="80"><rect id="Jerantut" data-name="Jerantut" className="cls-1" x="760" y="620" width="39" height="39"/><text className="cls-2" x="780" y="647">081</text></g>
        <g onClick={onClickHandler} id="81"><rect id="Indera_Mahkota" data-name="Indera Mahkota" className="cls-10" x="800" y="620" width="39" height="39"/><text className="cls-2" x="820" y="647">082</text></g>
        <g onClick={onClickHandler} id="82"><rect id="Kuantan" data-name="Kuantan" className="cls-4" x="800" y="660" width="39" height="39"/><text className="cls-2" x="820" y="687">083</text></g>
        <g onClick={onClickHandler} id="83"><rect id="Paya_Besar" data-name="Paya Besar" className="cls-1" x="840" y="660" width="39" height="39"/><text className="cls-2" x="860" y="687">084</text></g>
        <g onClick={onClickHandler} id="84"><rect id="Pekan" data-name="Pekan" className="cls-1" x="840" y="700" width="39" height="39"/><text className="cls-2" x="860" y="727">085</text></g>
        <g onClick={onClickHandler} id="85"><rect id="Maran" data-name="Maran" className="cls-1" x="880" y="700" width="39" height="39"/><text className="cls-2" x="900" y="727">086</text></g>
        <g onClick={onClickHandler} id="86"><rect id="Kuala_Krau" data-name="Kuala Krau" className="cls-1" x="880" y="740" width="39" height="39"/><text className="cls-2" x="900" y="767">087</text></g>
        <g onClick={onClickHandler} id="87"><rect id="Temerloh" data-name="Temerloh" className="cls-4" x="920" y="740" width="39" height="39"/><text className="cls-2" x="940" y="767">088</text></g>
        <g onClick={onClickHandler} id="88"><rect id="Bentong" data-name="Bentong" className="cls-4" x="880" y="780" width="39" height="39"/><text className="cls-2" x="900" y="807">089</text></g>
        <g onClick={onClickHandler} id="89"><rect id="Bera" data-name="Bera" className="cls-1" x="920" y="780" width="39" height="39"/><text className="cls-2" x="940" y="807">090</text></g>
        <g onClick={onClickHandler} id="90"><rect id="Rompin" data-name="Rompin" className="cls-1" x="880" y="820" width="39" height="39"/><text className="cls-2" x="900" y="847">091</text></g>

        <text id="Sgor" data-name="S’gor" className="cls-5" x="399.168" y="788.772">S’gor</text>
        <g onClick={onClickHandler} id="91"><rect id="Sabak_Bernam" data-name="Sabak Bernam" className="cls-1" x="480" y="700" width="39" height="39"/><text className="cls-2" x="500" y="727">092</text></g>
        <g onClick={onClickHandler} id="92"><rect id="Sungai_Besar" data-name="Sungai Besar" className="cls-4" x="520" y="700" width="39" height="39"/><text className="cls-2" x="540" y="727">093</text></g>
        <g onClick={onClickHandler} id="93"><rect id="Hulu_Selangor" data-name="Hulu Selangor" className="cls-4" x="560" y="700" width="39" height="39"/><text className="cls-2" x="580" y="727">094</text></g>
        <g onClick={onClickHandler} id="94"><rect id="Tanjong_Karang" data-name="Tanjong Karang" className="cls-4" x="600" y="700" width="39" height="39"/><text className="cls-2" x="620" y="727">095</text></g>
        <g onClick={onClickHandler} id="95"><rect id="Kuala_Selangor" data-name="Kuala Selangor" className="cls-4" x="640" y="700" width="39" height="39"/><text className="cls-2" x="660" y="727">096</text></g>
        <g onClick={onClickHandler} id="96"><rect id="Selayang" data-name="Selayang" className="cls-4" x="480" y="740" width="39" height="39"/><text className="cls-2" x="500" y="767">097</text></g>
        <g onClick={onClickHandler} id="97"><rect id="Gombak" data-name="Gombak" className="cls-4" x="520" y="740" width="39" height="39"/><text className="cls-2" x="540" y="767">098</text></g>
        <g onClick={onClickHandler} id="98"><rect id="Ampang" data-name="Ampang" className="cls-4" x="560" y="740" width="39" height="39"/><text className="cls-2" x="580" y="767">099</text></g>
        <g onClick={onClickHandler} id="99"><rect id="Pandan" data-name="Pandan" className="cls-4" x="600" y="740" width="39" height="39"/><text className="cls-2" x="620" y="767">100</text></g>
        <g onClick={onClickHandler} id="100"><rect id="Hulu_Langat" data-name="Hulu Langat" className="cls-4" x="640" y="740" width="39" height="39"/><text className="cls-2" x="660" y="767">101</text></g>
        <g onClick={onClickHandler} id="101"><rect id="Bangi" data-name="Bangi" className="cls-1" x="480" y="780" width="39" height="39"/><text className="cls-2" x="500" y="807">102</text></g>
        <g onClick={onClickHandler} id="102"><rect id="Puchong" data-name="Puchong" className="cls-4" x="520" y="780" width="39" height="39"/><text className="cls-2" x="540" y="807">103</text></g>
        <g onClick={onClickHandler} id="103"><rect id="Subang" data-name="Subang" className="cls-4" x="560" y="780" width="39" height="39"/><text className="cls-2" x="580" y="807">104</text></g>
        <g onClick={onClickHandler} id="104"><rect id="Petaling_Jaya" data-name="Petaling Jaya" className="cls-4" x="600" y="780" width="39" height="39"/><text className="cls-2" x="620" y="807">105</text></g>
        <g onClick={onClickHandler} id="105"><rect id="Damansara" data-name="Damansara" className="cls-4" x="640" y="780" width="39" height="39"/><text className="cls-2" x="660" y="807">106</text></g>
        <g onClick={onClickHandler} id="106"><rect id="Sungai_Buloh" data-name="Sungai Buloh" className="cls-4" x="480" y="820" width="39" height="39"/><text className="cls-2" x="500" y="847">107</text></g>
        <g onClick={onClickHandler} id="107"><rect id="Shah_Alam" data-name="Shah Alam" className="cls-4" x="520" y="820" width="39" height="39"/><text className="cls-2" x="540" y="847">108</text></g>
        <g onClick={onClickHandler} id="108"><rect id="Kapar" data-name="Kapar" className="cls-4" x="560" y="820" width="39" height="39"/><text className="cls-2" x="580" y="847">109</text></g>
        <g onClick={onClickHandler} id="109"><rect id="Klang" data-name="Klang" className="cls-4" x="600" y="820" width="39" height="39"/><text className="cls-2" x="620" y="847">110</text></g>
        <g onClick={onClickHandler} id="110"><rect id="Kota_Raja" data-name="Kota Raja" className="cls-4" x="640" y="820" width="39" height="39"/><text className="cls-2" x="660" y="847">111</text></g>
        <g onClick={onClickHandler} id="111"><rect id="Kuala_Langat" data-name="Kuala Langat" className="cls-4" x="480" y="860" width="39" height="39"/><text className="cls-2" x="500" y="887">112</text></g>
        <g onClick={onClickHandler} id="112"><rect id="Sepang" data-name="Sepang" className="cls-4" x="520" y="860" width="39" height="39"/><text className="cls-2" x="540" y="887">113</text></g>

        <text id="K.L" data-name="K.L." className="cls-5" x="728.169" y="725.772">K.L.</text>
        <g onClick={onClickHandler} id="113"><rect id="Kepong" data-name="Kepong" className="cls-4" x="720" y="740" width="39" height="39"/><text className="cls-2" x="740" y="767">114</text></g>
        <g onClick={onClickHandler} id="114"><rect id="Batu" data-name="Batu" className="cls-4" x="760" y="740" width="39" height="39"/><text className="cls-2" x="780" y="767">115</text></g>
        <g onClick={onClickHandler} id="115"><rect id="Wangsa_Maju" data-name="Wangsa Maju" className="cls-4" x="720" y="780" width="39" height="39"/><text className="cls-2" x="740" y="807">116</text></g>
        <g onClick={onClickHandler} id="116"><rect id="Segambut" data-name="Segambut" className="cls-4" x="760" y="780" width="39" height="39"/><text className="cls-2" x="780" y="807">117</text></g>
        <g onClick={onClickHandler} id="117"><rect id="Setiawangsa" data-name="Setiawangsa" className="cls-4" x="800" y="780" width="39" height="39"/><text className="cls-2" x="820" y="807">118</text></g>
        <g onClick={onClickHandler} id="118"><rect id="Titiwangsa" data-name="Titiwangsa" className="cls-10" x="720" y="820" width="39" height="39"/><text className="cls-2" x="740" y="847">119</text></g>
        <g onClick={onClickHandler} id="119"><rect id="Bukit_Bintang" data-name="Bukit Bintang" className="cls-4" x="760" y="820" width="39" height="39"/><text className="cls-2" x="780" y="847">120</text></g>
        <g onClick={onClickHandler} id="120"><rect id="Lembah_Pantai" data-name="Lembah Pantai" className="cls-4" x="800" y="820" width="39" height="39"/><text className="cls-2" x="820" y="847">121</text></g>
        <g onClick={onClickHandler} id="121"><rect id="Seputeh" data-name="Seputeh" className="cls-4" x="720" y="860" width="39" height="39"/><text className="cls-2" x="740" y="887">122</text></g>
        <g onClick={onClickHandler} id="122"><rect id="Cheras" data-name="Cheras" className="cls-4" x="760" y="860" width="39" height="39"/><text className="cls-2" x="780" y="887">123</text></g>
        <g onClick={onClickHandler} id="123"><rect id="Bandar_Tun_Razak" data-name="Bandar Tun Razak" className="cls-10" x="800" y="860" width="39" height="39"/><text className="cls-2" x="820" y="887">124</text></g>

        <text id="Pjaya" data-name="P’jaya" className="cls-5" x="813.169" y="965.772">P’jaya</text>
        <g onClick={onClickHandler} id="124"><rect id="Putrajaya" data-name="Putrajaya" className="cls-1" x="760" y="940" width="39" height="39"/><text className="cls-2" x="780" y="967">125</text></g>
        
        <text id="N.S" data-name="N.S." className="cls-5" x="493.169" y="974.772">N.S.</text>
        <g onClick={onClickHandler} id="125"><rect id="Jelebu" data-name="Jelebu" className="cls-1" x="600" y="900" width="39" height="39"/><text className="cls-2" x="620" y="927">126</text></g>
        <g onClick={onClickHandler} id="126"><rect id="Jempol" data-name="Jempol" className="cls-1" x="640" y="900" width="39" height="39"/><text className="cls-2" x="660" y="927">127</text></g>
        <g onClick={onClickHandler} id="127"><rect id="Seremban" data-name="Seremban" className="cls-4" x="560" y="940" width="39" height="39"/><text className="cls-2" x="580" y="967">128</text></g>
        <g onClick={onClickHandler} id="128"><rect id="Kuala_Pilah" data-name="Kuala Pilah" className="cls-10" x="600" y="940" width="39" height="39"/><text className="cls-2" x="620" y="967">129</text></g>
        <g onClick={onClickHandler} id="129"><rect id="Rasah" data-name="Rasah" className="cls-4" x="640" y="940" width="39" height="39"/><text className="cls-2" x="660" y="967">130</text></g>
        <g onClick={onClickHandler} id="130"><rect id="Rembau" data-name="Rembau" className="cls-1" x="680" y="940" width="39" height="39"/><text className="cls-2" x="700" y="967">131</text></g>
        <g onClick={onClickHandler} id="131"><rect id="Port_Dickson" data-name="Port Dickson" className="cls-4" x="600" y="980" width="39" height="39"/><text className="cls-2" x="620" y="1007">132</text></g>
        <g onClick={onClickHandler} id="132"><rect id="Tampin" data-name="Tampin" className="cls-4" x="640" y="980" width="39" height="39"/><text className="cls-2" x="660" y="1007">133</text></g>
        
        <text id="Melaka" data-name="Melaka" className="cls-5" x="542.72" y="1137.175">Melaka</text>
        <g onClick={onClickHandler} id="133"><rect id="Masjid Tanah" data-name="Masjid Tanah" className="cls-10" x="600" y="1060" width="39" height="39"/><text className="cls-2" x="620" y="1087">134</text></g>
        <g onClick={onClickHandler} id="134"><rect id="Alor Gajah" data-name="Alor Gajah" className="cls-10" x="640" y="1060" width="39" height="39"/><text className="cls-2" x="660" y="1087">135</text></g>
        <g onClick={onClickHandler} id="135"><rect id="Tangga Batu" data-name="Tangga Batu" className="cls-4" x="680" y="1060" width="39" height="39"/><text className="cls-2" x="700" y="1087">136</text></g>
        <g onClick={onClickHandler} id="136"><rect id="Hang Tuah" data-name= "Hang Tuah Jaya" className="cls-4" x="640" y="1100" width="39" height="39"/><text className="cls-2" x="660" y="1127">137</text></g>
        <g onClick={onClickHandler} id="137"><rect id="Kota Melaka" data-name="Kota Melaka" className="cls-4" x="680" y="1100" width="39" height="39"/><text className="cls-2" x="700" y="1127">138</text></g>
        <g onClick={onClickHandler} id="138"><rect id="Jasin" data-name="Jasin" className="cls-1" x="680" y="1140" width="39" height="39"/><text className="cls-2" x="700" y="1167">139</text></g>

        <text id="Johor" data-name="Johor" className="cls-5" x="940.168" y="1074.771">Johor</text>
        <g onClick={onClickHandler} id="139"><rect id="Segamat" data-name="Segamat" className="cls-9" x="760" y="1020" width="39" height="39"/><text className="cls-2" x="780" y="1047">140</text></g>
        <g onClick={onClickHandler} id="140"><rect id="Sekijang" data-name="Sekijang" className="cls-4" x="800" y="1020" width="39" height="39"/><text className="cls-2" x="820" y="1047">141</text></g>
        <g onClick={onClickHandler} id="141"><rect id="Labis" data-name="Labis" className="cls-4" x="840" y="1020" width="39" height="39"/><text className="cls-2" x="860" y="1047">142</text></g>
        <g onClick={onClickHandler} id="142"><rect id="Pagoh" data-name="Pagoh" className="cls-10" x="880" y="1020" width="39" height="39"/><text className="cls-2" x="900" y="1047">143</text></g>
        <g onClick={onClickHandler} id="143"><rect id="Ledang" data-name="Ledang" className="cls-4" x="760" y="1060" width="39" height="39"/><text className="cls-2" x="780" y="1087">144</text></g>
        <g onClick={onClickHandler} id="144"><rect id="Bakri" data-name="Bakri" className="cls-4" x="800" y="1060" width="39" height="39"/><text className="cls-2" x="820" y="1087">145</text></g>
        <g onClick={onClickHandler} id="145"><rect id="Muar" data-name="Muar" className="cls-4" x="840" y="1060" width="39" height="39"/><text className="cls-2" x="860" y="1087">146</text></g>
        <g onClick={onClickHandler} id="146"><rect id="Parit_Sulong" data-name="Parit Sulong" className="cls-1" x="880" y="1060" width="39" height="39"/><text className="cls-2" x="900" y="1087">147</text></g>
        <g onClick={onClickHandler} id="147"><rect id="Ayer_Hitam" data-name="Ayer Hitam" className="cls-1" x="760" y="1100" width="39" height="39"/><text className="cls-2" x="780" y="1127">148</text></g>
        <g onClick={onClickHandler} id="148"><rect id="Sri_Gading" data-name="Sri Gading" className="cls-7" x="800" y="1100" width="39" height="39"/><text className="cls-2" x="820" y="1127">149</text></g>
        <g onClick={onClickHandler} id="149"><rect id="Batu_Pahat" data-name="Batu Pahat" className="cls-10" x="840" y="1100" width="39" height="39"/><text className="cls-2" x="860" y="1127">150</text></g>
        <g onClick={onClickHandler} id="150"><rect id="Simpang_Renggam" data-name="Simpang Renggam" className="cls-4" x="880" y="1100" width="39" height="39"/><text className="cls-2" x="900" y="1127">151</text></g>
        <g onClick={onClickHandler} id="151"><rect id="Kluang" data-name="Kluang" className="cls-4" x="760" y="1140" width="39" height="39"/><text className="cls-2" x="780" y="1167">152</text></g>
        <g onClick={onClickHandler} id="152"><rect id="Sembrong" data-name="Sembrong" className="cls-1" x="800" y="1140" width="39" height="39"/><text className="cls-2" x="820" y="1167">153</text></g>
        <g onClick={onClickHandler} id="153"><rect id="Mersing" data-name="Mersing" className="cls-10" x="840" y="1140" width="39" height="39"/><text className="cls-2" x="860" y="1167">154</text></g>
        <g onClick={onClickHandler} id="154"><rect id="Tenggara" data-name="Tenggara" className="cls-1" x="880" y="1140" width="39" height="39"/><text className="cls-2" x="900" y="1167">155</text></g>
        <g onClick={onClickHandler} id="155"><rect id="Kota_Tinggi" data-name="Kota Tinggi" className="cls-1" x="920" y="1140" width="39" height="39"/><text className="cls-2" x="940" y="1167">156</text></g>
        <g onClick={onClickHandler} id="156"><rect id="Pengerang" data-name="Pengerang" className="cls-1" x="760" y="1180" width="39" height="39"/><text className="cls-2" x="780" y="1207">157</text></g>
        <g onClick={onClickHandler} id="157"><rect id="Tebrau" data-name="Tebrau" className="cls-9" x="800" y="1180" width="39" height="39"/><text className="cls-2" x="820" y="1207">158</text></g>
        <g onClick={onClickHandler} id="158"><rect id="Pasir_Gudang" data-name="Pasir Gudang" className="cls-4" x="840" y="1180" width="39" height="39"/><text className="cls-2" x="860" y="1207">159</text></g>
        <g onClick={onClickHandler} id="159"><rect id="Johor_Bahru" data-name="Johor Bahru" className="cls-4" x="880" y="1180" width="39" height="39"/><text className="cls-2" x="900" y="1207">160</text></g>
        <g onClick={onClickHandler} id="160"><rect id="Pulai" data-name="Pulai" className="cls-4" x="920" y="1180" width="39" height="39"/><text className="cls-2" x="940" y="1207">161</text></g>
        <g onClick={onClickHandler} id="161"><rect id="Iskandar_Puteri" data-name="Iskandar Puteri" className="cls-4" x="800" y="1220" width="39" height="39"/><text className="cls-2" x="820" y="1247">162</text></g>
        <g onClick={onClickHandler} id="162"><rect id="Kulai" data-name="Kulai" className="cls-1" x="840" y="1220" width="39" height="39"/><text className="cls-2" x="860" y="1247">163</text></g>
        <g onClick={onClickHandler} id="163"><rect id="Pontian" data-name="Pontian" className="cls-1" x="880" y="1220" width="39" height="39"/><text className="cls-2" x="900" y="1247">164</text></g>
        <g onClick={onClickHandler} id="164"><rect id="Tanjung_Piai" data-name="Tanjung Piai" className="cls-4" x="920" y="1220" width="39" height="39"/><text className="cls-2" x="940" y="1247">165</text></g>

        <text id="Labuan" data-name="Labuan" className="cls-5" x="1329.169" y="328.771">Labuan</text>
        <g onClick={onClickHandler} id="165"><rect id="Labuan" data-name="Labuan" className="cls-9" x="1420" y="300" width="39" height="39"/><text className="cls-2" x="1440" y="327">166</text></g>

        <text id="Sabah" data-name="Sabah" className="cls-5" x="1530.167" y="160.772">Sabah</text>
        <g onClick={onClickHandler} id="166"><rect id="Kudat" data-name="Kudat" className="cls-13" x="1620" y="140" width="39" height="39"/><text className="cls-3" x="1640" y="167">167</text></g>
        <g onClick={onClickHandler} id="167"><rect id="Kota_Marudu" data-name="Kota Marudu" className="cls-13" x="1580" y="180" width="39" height="39"/><text className="cls-3" x="1600" y="207">168</text></g>
        <g onClick={onClickHandler} id="168"><rect id="Kota_Belud" data-name="Kota Belud" className="cls-9" x="1620" y="180" width="39" height="39"/><text className="cls-2" x="1640" y="207">169</text></g>
        <g onClick={onClickHandler} id="169"><rect id="Tuaran" data-name="Tuaran" className="cls-4" x="1660" y="180" width="39" height="39"/><text className="cls-2" x="1680" y="207">170</text></g>
        <g onClick={onClickHandler} id="170"><rect id="Sepanggar" data-name="Sepanggar" className="cls-9" x="1540" y="220" width="39" height="39"/><text className="cls-2" x="1560" y="247">171</text></g>
        <g onClick={onClickHandler} id="171"><rect id="Kota_Kinabalu" data-name="Kota Kinabalu" className="cls-4" x="1580" y="220" width="39" height="39"/><text className="cls-2" x="1600" y="247">172</text></g>
        <g onClick={onClickHandler} id="172"><rect id="Putatan" data-name="Putatan" className="cls-4" x="1620" y="220" width="39" height="39"/><text className="cls-2" x="1640" y="247">173</text></g>
        <g onClick={onClickHandler} id="173"><rect id="Penampang" data-name="Penampang" className="cls-9" x="1660" y="220" width="39" height="39"/><text className="cls-2" x="1680" y="247">174</text></g>
        <g onClick={onClickHandler} id="174"><rect id="Papar" data-name="Papar" className="cls-9" x="1700" y="220" width="39" height="39"/><text className="cls-2" x="1720" y="247">175</text></g>
        <g onClick={onClickHandler} id="175"><rect id="Kimanis" data-name="Kimanis" className="cls-1" x="1500" y="260" width="39" height="39"/><text className="cls-2" x="1520" y="287">176</text></g>
        <g onClick={onClickHandler} id="176"><rect id="Beaufort" data-name="Beaufort" className="cls-13" x="1540" y="260" width="39" height="39"/><text className="cls-3" x="1560" y="287">177</text></g>
        <g onClick={onClickHandler} id="177"><rect id="Sipitang" data-name="Sipitang" className="cls-13" x="1580" y="260" width="39" height="39"/><text className="cls-3" x="1600" y="287">178</text></g>
        <g onClick={onClickHandler} id="178"><rect id="Ranau" data-name="Ranau" className="cls-13" x="1620" y="260" width="39" height="39"/><text className="cls-3" x="1640" y="287">179</text></g>
        <g onClick={onClickHandler} id="179"><rect id="Keningau" data-name="Keningau" className="cls-13" x="1660" y="260" width="39" height="39"/><text className="cls-3" x="1680" y="287">180</text></g>
        <g onClick={onClickHandler} id="180"><rect id="Tenom" data-name="Tenom" className="cls-4" x="1700" y="260" width="39" height="39"/><text className="cls-2" x="1720" y="287">181</text></g>
        <g onClick={onClickHandler} id="181"><rect id="Pensiangan" data-name="Pensiangan" className="cls-1" x="1740" y="260" width="39" height="39"/><text className="cls-2" x="1760" y="287">182</text></g>
        <g onClick={onClickHandler} id="182"><rect id="Beluran" data-name="Beluran" className="cls-13" x="1500" y="300" width="39" height="39"/><text className="cls-3" x="1520" y="327">183</text></g>
        <g onClick={onClickHandler} id="183"><rect id="Libaran" data-name="Libaran" className="cls-13" x="1540" y="300" width="39" height="39"/><text className="cls-3" x="1560" y="327">184</text></g>
        <g onClick={onClickHandler} id="184"><rect id="Batu_Sapi" data-name="Batu Sapi" className="cls-9" x="1580" y="300" width="39" height="39"/><text className="cls-2" x="1600" y="327">185</text></g>
        <g onClick={onClickHandler} id="185"><rect id="Sandakan" data-name="Sandakan" className="cls-4" x="1620" y="300" width="39" height="39"/><text className="cls-2" x="1640" y="327">186</text></g>
        <g onClick={onClickHandler} id="186"><rect id="Kinabatangan" data-name="Kinabatangan" className="cls-1" x="1540" y="340" width="39" height="39"/><text className="cls-2" x="1560" y="367">187</text></g>
        <g onClick={onClickHandler} id="187"><rect id="Lahad_Datu" data-name="Lahad Datu" className="cls-9" x="1580" y="340" width="39" height="39"/><text className="cls-2" x="1600" y="367">188</text></g>
        <g onClick={onClickHandler} id="188"><rect id="Semporna" data-name="Semporna" className="cls-9" x="1620" y="340" width="39" height="39"/><text className="cls-2" x="1640" y="367">189</text></g>
        <g onClick={onClickHandler} id="189"><rect id="Tawau" data-name="Tawau" className="cls-4" x="1660" y="340" width="39" height="39"/><text className="cls-2" x="1680" y="367">190</text></g>
        <g onClick={onClickHandler} id="190"><rect id="Kalabalakan" data-name="Kalabalakan" className="cls-9" x="1700" y="340" width="39" height="39"/><text className="cls-2" x="1720" y="367">191</text></g>

        <text id="Swak" data-name="S’wak" className="cls-5" x="1217.169" y="491.772">S’wak</text>
        <g onClick={onClickHandler} id="191"><rect id="Mas_Gading" data-name="Mas Gading" className="cls-4" x="1420" y="380" width="39" height="39"/><text className="cls-2" x="1440" y="407">192</text></g>
        <g onClick={onClickHandler} id="192"><rect id="Santubong" data-name="Santubong" className="cls-15" x="1460" y="380" width="39" height="39"/><text className="cls-2" x="1480" y="407">193</text></g>
        <g onClick={onClickHandler} id="193"><rect id="Petra_Jaya" data-name="Petra Jaya" className="cls-15" x="1380" y="420" width="39" height="39"/><text className="cls-2" x="1400" y="447">194</text></g>
        <g onClick={onClickHandler} id="194"><rect id="Bandar_Kuching" data-name="Bandar Kuching" className="cls-4" x="1420" y="420" width="39" height="39"/><text className="cls-2" x="1440" y="447">195</text></g>
        <g onClick={onClickHandler} id="195"><rect id="Stampin" data-name="Stampin" className="cls-4" x="1460" y="420" width="39" height="39"/><text className="cls-2" x="1480" y="447">196</text></g>
        <g onClick={onClickHandler} id="196"><rect id="Kota_Samarahan" data-name="Kota Samarahan" className="cls-15" x="1500" y="420" width="39" height="39"/><text className="cls-2" x="1520" y="447">197</text></g>
        <g onClick={onClickHandler} id="197"><rect id="Puncak_Borneo" data-name="Puncak Borneo" className="cls-15" x="1340" y="460" width="39" height="39"/><text className="cls-2" x="1360" y="487">198</text></g>
        <g onClick={onClickHandler} id="198"><rect id="Serian" data-name="Serian" className="cls-15" x="1380" y="460" width="39" height="39"/><text className="cls-2" x="1400" y="487">199</text></g>
        <g onClick={onClickHandler} id="199"><rect id="Batang_Sadong" data-name="Batang Sadong" className="cls-15" x="1420" y="460" width="39" height="39"/><text className="cls-2" x="1440" y="487">200</text></g>
        <g onClick={onClickHandler} id="200"><rect id="Batang_Lupar" data-name="Batang Lupar" className="cls-15" x="1460" y="460" width="39" height="39"/><text className="cls-2" x="1480" y="487">201</text></g>
        <g onClick={onClickHandler} id="201"><rect id="Sri_Aman" data-name="Sri Aman" className="cls-9" x="1300" y="500" width="39" height="39"/><text className="cls-2" x="1320" y="527">202</text></g>
        <g onClick={onClickHandler} id="202"><rect id="Lubok_Antu" data-name="Lubok Antu" className="cls-9" x="1340" y="500" width="39" height="39"/><text className="cls-2" x="1360" y="527">203</text></g>
        <g onClick={onClickHandler} id="203"><rect id="Betong" data-name="Betong" className="cls-15" x="1380" y="500" width="39" height="39"/><text className="cls-2" x="1400" y="527">204</text></g>
        <g onClick={onClickHandler} id="204"><rect id="Saratok" data-name="Saratok" className="cls-13" x="1420" y="500" width="39" height="39"/><text className="cls-3" x="1440" y="527">205</text></g>
        <g onClick={onClickHandler} id="205"><rect id="Tanjong_Manis" data-name="Tanjong Manis" className="cls-15" x="1460" y="500" width="39" height="39"/><text className="cls-2" x="1480" y="527">206</text></g>
        <g onClick={onClickHandler} id="206"><rect id="Igan" data-name="Igan" className="cls-15" x="1220" y="540" width="39" height="39"/><text className="cls-2" x="1240" y="567">207</text></g>
        <g onClick={onClickHandler} id="207"><rect id="Sarikei" data-name="Sarikei" className="cls-4" x="1260" y="540" width="39" height="39"/><text className="cls-2" x="1280" y="567">208</text></g>
        <g onClick={onClickHandler} id="208"><rect id="Julau" data-name="Julau" className="cls-9" x="1300" y="540" width="39" height="39"/><text className="cls-2" x="1320" y="567">209</text></g>
        <g onClick={onClickHandler} id="209"><rect id="Kanowit" data-name="Kanowit" className="cls-15" x="1340" y="540" width="39" height="39"/><text className="cls-2" x="1360" y="567">210</text></g>
        <g onClick={onClickHandler} id="210"><rect id="Lanang" data-name="Lanang" className="cls-4" x="1380" y="540" width="39" height="39"/><text className="cls-2" x="1400" y="567">211</text></g>
        <g onClick={onClickHandler} id="211"><rect id="Sibu" data-name="Sibu" className="cls-4" x="1420" y="540" width="39" height="39"/><text className="cls-2" x="1440" y="567">212</text></g>
        <g onClick={onClickHandler} id="212"><rect id="Mukah" data-name="Mukah" className="cls-15" x="1100" y="580" width="39" height="39"/><text className="cls-2" x="1120" y="607">213</text></g>
        <g onClick={onClickHandler} id="213"><rect id="Selangau" data-name="Selangau" className="cls-9" x="1180" y="580" width="39" height="39"/><text className="cls-2" x="1200" y="607">214</text></g>
        <g onClick={onClickHandler} id="214"><rect id="Kapit" data-name="Kapit" className="cls-15" x="1220" y="580" width="39" height="39"/><text className="cls-2" x="1240" y="607">215</text></g>
        <g onClick={onClickHandler} id="215"><rect id="Hulu_Rajang" data-name="Hulu Rajang" className="cls-15" x="1260" y="580" width="39" height="39"/><text className="cls-2" x="1280" y="607">216</text></g>
        <g onClick={onClickHandler} id="216"><rect id="Bintulu" data-name="Bintulu" className="cls-15" x="1300" y="580" width="39" height="39"/><text className="cls-2" x="1320" y="607">217</text></g>
        <g onClick={onClickHandler} id="217"><rect id="Sibuti" data-name="Sibuti" className="cls-15" x="1340" y="580" width="39" height="39"/><text className="cls-2" x="1360" y="607">218</text></g>
        <g onClick={onClickHandler} id="218"><rect id="Miri" data-name="Miri" className="cls-4" x="1380" y="580" width="39" height="39"/><text className="cls-2" x="1400" y="607">219</text></g>
        <g onClick={onClickHandler} id="219"><rect id="Baram" data-name="Baram" className="cls-15" x="1140" y="620" width="39" height="39"/><text className="cls-2" x="1160" y="647">220</text></g>
        <g onClick={onClickHandler} id="220"><rect id="Limbang" data-name="Limbang" className="cls-15" x="1180" y="620" width="39" height="39"/><text className="cls-2" x="1200" y="647">221</text></g>
        <g onClick={onClickHandler} id="221"><rect id="Lawas" data-name="Lawas" className="cls-15" x="1220" y="620" width="39" height="39"/><text className="cls-2" x="1240" y="647">222</text></g>
        
        <text id="BN " data-name="BN " className="cls-5 " x="1690" y="925">BN</text>
        <rect id="BN " data-name="BN " className="cls-1 " x="1640" y="900" width="30" height="30"/>
        <text id="PH " data-name="PH " className="cls-5 " x="1690" y="975">PH</text>
        <rect id="PH " data-name="PH " className="cls-4 " x="1640" y="950" width="30" height="30"/>
        <text id="PN " data-name="PN " className="cls-5 " x="1690" y="1025">PN</text>
        <rect id="PN " data-name="PN " className="cls-10" x="1640" y="1000" width="30" height="30"/>
        <text id="PAS" data-name="PAS" className="cls-5 " x="1690" y="1075">PAS</text>
        <rect id="PAS" data-name="PAS" className="cls-6 " x="1640" y="1050" width="30" height="30"/>
        <text id="GRS" data-name="GRS" className="cls-5 " x="1690" y="1125">GRS</text>
        <rect id="GRS" data-name="GRS" className="cls-13" x="1640" y="1100" width="30" height="30"/>
        <text id="GPS" data-name="GPS" className="cls-5 " x="1690" y="1175">GPS</text>
        <rect id="GPS" data-name="GPS" className="cls-15" x="1640" y="1150" width="30" height="30"/>
        <text id="Otr" data-name="Otr" className="cls-5 " x="1690" y="1225">Others</text>
        <rect id="Otr" data-name="Otr" className="cls-9 " x="1640" y="1200" width="30" height="30"/>

      </svg>


    </div>
  );
}
