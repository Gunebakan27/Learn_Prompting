"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6502],{3905:(a,n,e)=>{e.d(n,{Zo:()=>g,kt:()=>b});var t=e(67294);function i(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function r(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function u(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function l(a,n){if(null==a)return{};var e,t,i=function(a,n){if(null==a)return{};var e,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||(i[e]=a[e]);return i}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var s=t.createContext({}),m=function(a){var n=t.useContext(s),e=n;return a&&(e="function"==typeof a?a(n):u(u({},n),a)),e},g=function(a){var n=m(a.components);return t.createElement(s.Provider,{value:n},a.children)},k="mdxType",p={inlineCode:"code",wrapper:function(a){var n=a.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(a,n){var e=a.components,i=a.mdxType,r=a.originalType,s=a.parentName,g=l(a,["components","mdxType","originalType","parentName"]),k=m(e),d=i,b=k["".concat(s,".").concat(d)]||k[d]||p[d]||r;return e?t.createElement(b,u(u({ref:n},g),{},{components:e})):t.createElement(b,u({ref:n},g))}));function b(a,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof a||i){var r=e.length,u=new Array(r);u[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=a,l[k]="string"==typeof a?a:i,u[1]=l;for(var m=2;m<r;m++)u[m]=e[m];return t.createElement.apply(null,u)}return t.createElement.apply(null,e)}d.displayName="MDXCreateElement"},89973:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var t=e(87462),i=(e(67294),e(3905));const r={sidebar_position:30},u="\ud83d\udfe2 Menulis Blog",l={unversionedId:"basic_applications/blog_generation",id:"basic_applications/blog_generation",title:"\ud83d\udfe2 Menulis Blog",description:"Bagaimana jika Anda bisa menulis sebuah tulisan blog dalam 5 detik?",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/basic_applications/blog_generation.md",sourceDirName:"basic_applications",slug:"/basic_applications/blog_generation",permalink:"/id/docs/basic_applications/blog_generation",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/blog_generation.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Menulis Email",permalink:"/id/docs/basic_applications/writing_emails"},next:{title:"\ud83d\udfe2 Rekan Belajar",permalink:"/id/docs/basic_applications/study_tool"}},s={},m=[{value:"Pelajaran Penting",id:"pelajaran-penting",level:2}],g={toc:m},k="wrapper";function p(a){let{components:n,...e}=a;return(0,i.kt)(k,(0,t.Z)({},g,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-menulis-blog"},"\ud83d\udfe2 Menulis Blog"),(0,i.kt)("p",null,"Bagaimana jika Anda bisa menulis sebuah tulisan blog dalam 5 detik?"),(0,i.kt)("p",null,"Sejujurnya, kamu tidak bisa. Tetapi AI bisa secara ",(0,i.kt)("strong",{parentName:"p"},"signifikan")," mengurangi waktu yang dibutuhkan untuk menulis blog. Ada banyak produk yang mencoba melakukannya, tetapi Anda sering dapat menghasilkan hasil yang konsisten melakukannya sendiri."),(0,i.kt)("p",null,"Halaman ini mencakup dasar-dasar penggunaan AI untuk membantu Anda menulis blog. Proses ini harus bersifat iteratif: Anda harus menulis prompt, melihat apa yang dihasilkan oleh model, mengambil bagian dari output, dan mengulanginya."),(0,i.kt)("p",null,'Sebagai contoh, berpura-puralah Anda bekerja di taman dan menulis artikel tentang "Mengapa Kaktus Natal adalah incaran yang bagus". Saya selalu suka memulai dengan sebuah garis besar, jadi mari kita mulai dengan prompt berikut:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Tulis garis besar untuk posting blog singkat tentang mengapa Kaktus Natal adalah pembelian yang bagus.\n\n// sorot-mulai\nI. Pengantar\nA. Gambaran Singkat Mengenai Christmas Cacti\nB. Manfaat Memiliki Christmas Cacti\n\nII. Kaktus Natal Terjangkau\nA. Biaya Kaktus Natal\nB. Perbandingan dengan Tanaman Hias Lainnya\n\nIII. Natal kaktus memiliki masa hidup yang panjang\nA. Rata-rata Masa Hidup Natal kaktus\nB. Persyaratan Perawatan Rendah\n\nIV. Christmas Cacti Membuat Hadiah yang Hebat\nA. Warna dan Bentuk Bunga yang Unik\nB. Mudah Dirawat dan Tahan Lama\n\nV. Kesimpulan\nA. Ringkasan Manfaat Memiliki Christmas Cacti \nB. Dimana Menemukan Christmas Cacti \nC. Saran Perawatan dan Pemeliharaan\n\n//highlight-end\n")),(0,i.kt)("p",null,"Wow, hasilnya sangat komprehensif. Mungkin kita ingin posting yang sedikit lebih singkat, jadi mari kita meminta AI untuk menulis versi yang lebih pendek menggunakan prompt ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Itu adalah garis besar yang bagus, tapi terlalu panjang. Simpulkan menjadi poin utama:\n")),(0,i.kt)("p",null,":::catatan\nKami berasumsi bahwa Anda menggunakan ChatGPT (jika tidak, cukup letakkan kerangka sebelum permintaan baru ini)\n:::"),(0,i.kt)("p",null,"Berikut adalah hasil model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"// highlight-start\nI. Pendahuluan \nA. Gambaran Singkat tentang Kaktus Natal \n\nII. Manfaat \nA. Terjangkau \nB. Umur Panjang \nC. Hadiah Bagus \n\nIII. Kesimpulan \nA. Ringkasan Manfaat \nB. Di Mana Menemukannya \nC. Saran untuk Perawatan dan Pemeliharaan\n//highlight-end\n")),(0,i.kt)("p",null,"Sempurna! Sekarang mari kita minta agar menggunakan garis besar ini untuk menulis sebuah posting blog lengkap:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Tulis serangkaian tulisan blog singkat menggunakan kerangka ini tentang mengapa Christmas Cacti adalah pembelian yang bagus.\n\n// sorot-mulai\nKaktus Natal adalah pembelian yang bagus untuk musim liburan! Mereka adalah pilihan yang terjangkau dan tahan lama yang bisa menjadi hadiah yang bagus. Christmas Cacti mudah ditemukan di sebagian besar toko kebun dan tanaman, dan mereka bervariasi harganya dari beberapa dolar menjadi lebih mahal, tergantung pada ukuran dan bentuk tanaman.\n\nTanaman ini juga dikenal karena umur hidupnya yang panjang. Jika dirawat dengan baik, mereka dapat bertahan selama bertahun-tahun, memberikan teman dan keluarga Anda pengingat abadi tentang semangat liburan. Kaktus Natal membutuhkan perawatan yang relatif rendah dan memerlukan perawatan minimal, menjadikannya pilihan yang tepat untuk seseorang yang tidak memiliki banyak pengalaman dengan tanaman. Mereka sebaiknya diletakkan di tempat yang terang dan cerah, disiram secara teratur, dan diberi pupuk tanaman setiap bulan atau lebih. \n\nSecara keseluruhan, Kaktus Natal adalah pembelian yang bagus untuk liburan. Mereka terjangkau, memiliki umur panjang, dan menjadi hadiah yang bagus. Dengan perawatan dan perhatian minimal, tanaman ini bisa memberikan pengingat indah tentang musim liburan selama bertahun-tahun mendatang.\n//highlight-end\n")),(0,i.kt)("p",null,"Baiklah, itu terlihat cukup bagus. Kemungkinan besar kami ingin menambahkan informasi tentang perusahaan kami dan harga tanaman Natal, jadi mari kita gunakan petunjuk berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Sempurna! Tambahkan sebuah paragraf di akhir tentang perusahaan dan harga kami pada Natal Cacti.\nPerusahaan: Prickly Point Nursery\nHarga untuk Christmas Cacti: $10-$25\n")),(0,i.kt)("p",null,"Ini adalah hasil model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"// highlight-star\nKaktus Natal adalah pembelian yang bagus untuk musim liburan! Mereka adalah pilihan yang terjangkau dan tahan lama yang menjadi hadiah yang bagus. Cactus Natal mudah ditemukan di sebagian besar toko kebun dan tanaman, dan harganya bervariasi mulai dari beberapa dolar hingga lebih mahal, tergantung pada ukuran dan bentuk tanaman.\n\nTanaman ini juga dikenal karena umur panjang mereka. Jika dirawat dengan baik, mereka dapat bertahan selama bertahun-tahun, memberikan teman dan keluarga Anda pengingat abadi dari semangat liburan. Kaktus Natal cukup mudah perawatannya dan membutuhkan perawatan minimal, menjadikannya pilihan yang bagus untuk seseorang yang tidak memiliki banyak pengalaman dengan tanaman. Mereka harus diletakkan di tempat yang terang dan berjemur, disiram secara teratur, dan diberi pupuk tanaman setiap bulannya atau lebih. \n\nSecara keseluruhan, Kaktus Natal adalah pembelian yang bagus untuk liburan. Mereka terjangkau, memiliki umur panjang, dan menjadi hadiah yang bagus. Dengan perawatan dan perhatian minimal, tanaman-tanaman ini dapat memberikan pengingat indah tentang musim liburan untuk tahun-tahun mendatang.\n\nDi Taman Prickly Point, kami mengkhususkan diri dalam menyediakan tanaman dan bunga berkualitas tinggi untuk kebutuhan semua orang. Kami bangga menawarkan berbagai jenis Christmas Cacti dengan harga yang fantastis. Harga berkisar dari $10 untuk tanaman kecil hingga $25 untuk tanaman yang lebih besar, jadi Anda pasti akan menemukan yang sempurna sesuai anggaran apa pun. Staf kami selalu siap memberikan saran dan tips yang bermanfaat tentang bagaimana merawat tanaman Anda, sehingga Anda dapat menjaga Kaktus Natal Anda tetap segar dan indah selama bertahun-tahun ke depan. Terima kasih telah mempertimbangkan Prickly Point Nursery untuk kebutuhan tanaman liburan Anda!\n//highlight-end\n")),(0,i.kt)("p",null,"Ini adalah sebuah blog post yang cukup bagus!"),(0,i.kt)("p",null,"Ketika saya menulis konten, biasanya saya hanya menggunakan ChatGPT atau GPT-3, tetapi ada beberapa alat lain yang dapat membantu Anda menulis blog, seperti ",(0,i.kt)("a",{parentName:"p",href:"https://www.jasper.ai/"},"Jasper.ai")," dan ",(0,i.kt)("a",{parentName:"p",href:"https://www.copy.ai/"},"Copy.ai"),". Ini biasanya bergantung pada GPT-3 di balik layar, tetapi mereka memiliki sejumlah fitur lain yang bisa membantu Anda menulis konten."),(0,i.kt)("h2",{id:"pelajaran-penting"},"Pelajaran Penting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AI dapat membantu Anda menulis posting blog yang berkualitas tinggi dalam sebagian kecil waktu yang dibutuhkan untuk menulisnya sendiri. Proses ini tidak sepenuhnya otomatis, sehingga membutuhkan Anda untuk terlibat aktif dalam proses.")))}p.isMDXComponent=!0}}]);