import { TbWorld } from "react-icons/tb";
import { MdOutlineTranslate } from "react-icons/md";
import { IoTimeOutline, IoEyeOutline } from "react-icons/io5";
import {
  PiBroadcastLight,
  PiPersonArmsSpread,
  PiTelevisionSimpleLight,
  PiBroadcast,
  PiMegaphone,
} from "react-icons/pi";
import { CiCalendar, CiFlag1 } from "react-icons/ci";
import { BiEditAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import { SiImdb } from "react-icons/si";

const movieData = [
  {
    id: 1,
    url: "the-fault-in-our-stars",
    imgUrl: "the-fault-in-our-stars.jpg",
    title: "the fault in our stars",
    persianTitle: "ستاره های بخت ما",
    imgHeader: "the-fault-in-our-stars.jpg",
    timeMovie: "55",
    gdnre: [
      { title: "درام", url: "/drama" },
      { title: "عاشقانه", url: "/romance" },
    ],
    detailMovieList: [
      { title: "محصول کشور", answer: "آمریکا", icon: <TbWorld /> },
      { title: "زبان اصلی", answer: "انگلیسی", icon: <MdOutlineTranslate /> },
      { title: "مدت زمان", answer: "55 دقیقه", icon: <IoTimeOutline /> },
      { title: "وضعیت", answer: "تمام شده", icon: <PiBroadcastLight /> },
      { title: "رده سنی", answer: "+ 20", icon: <PiPersonArmsSpread /> },
      { title: "سال انتشار", answer: "2018", icon: <CiCalendar /> },
      { title: "شبکه", answer: "netflix", icon: <PiTelevisionSimpleLight /> },
      { title: "نویسنده", answer: "John Michael Green", icon: <BiEditAlt /> },
      { title: "لیست تماشای", answer: "2345 کاربر", icon: <IoEyeOutline /> },
      { title: "مورد علاقه", answer: "520 کاربر", icon: <FaRegHeart /> },
    ],
    imdbRating: 7.7,
    category: "movie",
    subtitles: [
      {
        subType: "فارسی",
        urlSub:
          "https://subscene.com/subtitles/the-fault-in-our-stars/farsi_persian",
      },
      {
        subType: "انگلیسی",
        urlSub: "https://subscene.com/subtitles/the-fault-in-our-stars/english",
      },
    ],
    trainer:
      "https://www.youtube.com/embed/9ItBvH5J6ss?si=CyNJmLuPGU0d-6Oc",
    detail:
      "داستان دو بیمار سرطانی نوجوان که به منظور ملاقات با نویسنده‌ای منزوی در آمستردام سفری سرنوشت ساز را آغاز می‌کنند.",
    comments: [
      {
        id: 1,
        author: "Darling016",
        contetnt: "فیلمی مثل این رو معرفی کنید",
        timeComment: "۲۹ اسفند ۱۴۰۲ ۱۳:۰۸",
        replies: [
          {
            id: 2,
            author: "user_184155",
            relpy: "Five Feet Apart",
            timeReply: "۲۹ اسفند ۱۴۰۲ ۱۳:۰۸",
          },
        ],
      },
      {
        id: 3,
        author: "user_15245",
        contetnt:
          "فیلم خوبی بود اما آخرای فیلم هر چقدر میگفتم الان دیگه باید فیلم رو تموم کنه تموم نمیشد کم مونده بود دنیای بعد از مرگ کارکتر پسر رو هم نشون بده همون خیلی قبل ترش تموم میشد خیلی بهتر بود",
        timeComment: "۲۹ اسفند 1403 ۱۳:۰۸",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    url: "game-of-thrones",
    imgUrl: "game-of-thrones.jpg",
    title: "game of thrones",
    persianTitle: "بازی تاج و تخت",
    imgHeader: "game-of-thrones.jpg",
    timeMovie: "55",
    gdnre: [
      { title: "اکشن", url: "/action" },
      { title: "درام", url: "/drama" },
      { title: "فانتزی", url: "/fantasy" },
      { title: "ماجراجویی", url: "/adventure" },
    ],
    detailMovieList: [
      { title: "محصول کشور", answer: "آمریکا", icon: <TbWorld /> },
      { title: "زبان اصلی", answer: "انگلیسی", icon: <MdOutlineTranslate /> },
      { title: "مدت زمان", answer: "55 دقیقه", icon: <IoTimeOutline /> },
      { title: "وضعیت", answer: "تمام شده", icon: <PiBroadcastLight /> },
      { title: "رده سنی", answer: "+ 20", icon: <PiPersonArmsSpread /> },
      { title: "سال انتشار", answer: "2021", icon: <CiCalendar /> },
      { title: "شبکه", answer: "HBO", icon: <PiTelevisionSimpleLight /> },
      { title: "لیست تماشای", answer: "11 کاربر", icon: <IoEyeOutline /> },
      { title: "مورد علاقه", answer: "10 کاربر", icon: <FaRegHeart /> },
    ],
    imdbRating: 9.2,
    category: "series",
    subtitles: [
      {
        subType: "فارسی فصل 1",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-first-season-1/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 1",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-first-season-1/english",
      },
      {
        subType: "فارسی فصل 2",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-second-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 2",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-second-season/english",
      },
      {
        subType: "فارسی فصل 3",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-third-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 3",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-third-season/english",
      },
      {
        subType: "فارسی فصل 4",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-fourth-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 4",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-fourth-season/english",
      },
      {
        subType: "فارسی فصل 5",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-fifth-season-2015/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 5",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-fifth-season-2015/english",
      },
      {
        subType: "فارسی فصل 6",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-sixth-season-tv-2016/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 6",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-sixth-season-tv-2016/english",
      },
      {
        subType: "فارسی فصل 7",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-seventh-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 7",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-seventh-season/english",
      },
      {
        subType: "فارسی فصل 8",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-eighth-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 8",
        urlSub:
          "https://subscene.com/subtitles/game-of-thrones-eighth-season/english",
      },
    ],
    trainer:
      "https://www.youtube.com/embed/KPLWWIOCOOQ?si=ilIwql5eVQSQ_jDY",
    detail:
      "هفت خاندان سلطنتی برای بدست گرفتن تاج و تخت با یکدیگر مبارزه می‌کنند",
    comments: [
      {
        id: 1,
        author: "Darling016",
        contetnt: "گات در مقابل عظمت بریکینگ بد جکه مضحکه !",
        timeComment: "۲۹ اسفند ۱۴۰۲ ۱۳:۰۸",
        replies: [
          {
            id: 2,
            author: "user_184155",
            relpy:
              "سعی کنید کامنتتونو در غالب یه نظر بدین نه متن سلیقه ها متفاوتن و هر کسی سلیقه ای داره اینکه شما فکر میکنین بریکینگ بد بهتره برای من جک مضحکه چون سلیقه ام فرق میکنه با شما با این تفاوت که نمیرم زیر پستای بریکینگ بد و هی نظرمو تحمیل کنم رو بقیه",
            timeReply: "۲۹ اسفند ۱۴۰۲ ۱۳:۰۸",
          },
          {
            id: 3,
            author: "user_184155",
            relpy:
              "عظمت برکینگ بد؟😂😂😂اون سریال که کلن قابل مقایسه با حتی یک فصل گات نیست،به این سریال میگن بیگ پروداکشن.اونو باید با بترکال مقایسه کنی ن این😂😂😂",
            timeReply: "۲۹ اسفند ۱۴۰۲ ۱۳:۰۸",
          },
        ],
      },
      {
        id: 3,
        author: "user_15245",
        contetnt:
          "الآن تمومش کردم خیلی جالب و سرگرم‌کننده و میخکوب‌کننده بود، هرچند من از لهجه بریتیش خوشم نمیاد فقط دو قسمت آخرش ضد حال شد برام",
        timeComment: "۲۹ اسفند 1403 ۱۳:۰۸",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    url: "braking-bad",
    imgUrl: "breaking-bad-bg.jpg",
    title: "braking bad",
    persianTitle: "بریکینگ بد",
    imgHeader: "braking-bad.jpg",
    timeMovie: "55",
    gdnre: [
      { title: "درام", url: "/drama" },
      { title: "جنایی", url: "/crime" },
      { title: "هیجان انگیز", url: "/thriller" },
    ],
    detailMovieList: [
      { title: "محصول کشور", answer: "آمریکا", icon: <TbWorld /> },
      { title: "زبان اصلی", answer: "انگلیسی", icon: <MdOutlineTranslate /> },
      { title: "زبان فرعی", answer: "اسپانیایی", icon: <CiFlag1 /> },
      { title: "مدت زمان", answer: "49 دقیقه", icon: <IoTimeOutline /> },
      {
        title: "وضعیت",
        answer: "تمام شده (فصل 5)",
        icon: <PiBroadcastLight />,
      },
      { title: "رده سنی", answer: "TV-MA", icon: <PiPersonArmsSpread /> },
      { title: "سال انتشار", answer: "2008", icon: <CiCalendar /> },
      { title: "شبکه", answer: "AMC", icon: <PiTelevisionSimpleLight /> },
      { title: "نویسنده", answer: "Vince Gilligan", icon: <BiEditAlt /> },
      { title: "لیست تماشای", answer: "2790 کاربر", icon: <IoEyeOutline /> },
      { title: "مورد علاقه", answer: "4226 کاربر", icon: <FaRegHeart /> },
      { title: "در 250 عنوان برتر", answer: "1", icon: <SiImdb /> },
    ],
    imdbRating: 9.5,
    category: "series",
    subtitles: [
      {
        subType: "فارسی فصل 1",
        urlSub:
          "https://subscene.com/subtitles/breaking-bad-first-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 1",
        urlSub:
          "https://subscene.com/subtitles/breaking-bad-first-season/english",
      },
      {
        subType: "فارسی فصل 2",
        urlSub:
          "https://subscene.com/subtitles/breaking-bad-second-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 2",
        urlSub:
          "https://subscene.com/subtitles/breaking-bad-second-season/english",
      },
      {
        subType: "فارسی فصل 3",
        urlSub:
          "https://subscene.com/subtitles/breaking-bad-third-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 3",
        urlSub:
          "https://subscene.com/subtitles/breaking-bad-third-season/english",
      },
      {
        subType: "فارسی فصل 4",
        urlSub:
          "https://subscene.com/subtitles/breaking-bad-fourth-season-2011/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 4",
        urlSub:
          "https://subscene.com/subtitles/breaking-bad-fourth-season-2011/english",
      },
      {
        subType: "فارسی فصل 5",
        urlSub:
          "https://subscene.com/subtitles/breaking-bad-fifth-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 5",
        urlSub:
          "https://subscene.com/subtitles/breaking-bad-fifth-season/english",
      },
    ],
    trainer:
      "https://www.youtube.com/embed/HhesaQXLuRY?si=U6rlg1CFR45mhs0w",
    detail:
      "درباره یک معلم شیمی میانسال است که متوجه می شود که دارای سرطان ریه است و ۲ سال بیشتر وقت برای زندگی ندارد.",
    comments: [
      {
        id: 1,
        author: "Darling016",
        contetnt:
          "تنها سریالی که بعد از فرندز میشه بارها دید و لذت برد تازه اینم در نظر بگیرید ژانر سریال سیتکام نیست پس ارزشش دو چندان میشه کاش ماشین زمان داشتم برمیگشتم به سال های پخش این سریال",
        timeComment: "۲۹ اسفند ۱۴۰۲ ۱۳:۰۸",
        replies: [
          {
            id: 2,
            author: "user_184155",
            relpy:
              "وای عالی گفتی. هر وقت میخوام حال کنم در سال اول فرندز رو تموم میکنم بعد برکینگ بد. سالهاست کارم اینه. عجیب اینکه هر بار انگار بار اوله و لذت و هیجان و خنده بهم دست میده. البته دلیلش اینه یک ایرانی بدبخت افسرده هستم که دنیای واقعی رو نمیخوام ببینم.",
            timeReply: "۲۹ اسفند ۱۴۰۲ ۱۳:۰۸",
          },
        ],
      },
      {
        id: 3,
        author: "user_15245",
        contetnt:
          "هرچی درباره این سریال بگم کم گفتم بهترین چیزی که تاحالا تو دنیای فیلم و سریال ساخته شده بهترین پایان بندی بهترین شخصیت پردازی بهترین داستان و بهترین پایان بندی که هیچ جا مثلشو پیدا نمی‌کنید. 4 بار تمومش کردم ولی فکر کنم تا آخر عمرم حداقل 30 بار ببینمش",
        timeComment: "۲۹ اسفند 1403 ۱۳:۰۸",
        replies: [],
      },
    ],
  },
  {
    id: 4,
    url: "winnie-the-pooh",
    imgUrl: "pooh-1.jpg",
    title: "winnie the pooh",
    persianTitle: "وینی د پو: خون و عسل",
    imgHeader: "pooh-bg-1.jpg",
    timeMovie: "55",
    gdnre: [{ title: "ترسناک", url: "/horror" }],
    detailMovieList: [
      { title: "محصول کشور", answer: "انگلستان", icon: <TbWorld /> },
      { title: "زبان اصلی", answer: "انگلیسی", icon: <MdOutlineTranslate /> },
      { title: "مدت زمان", answer: "1 ساعت 24 دقیقه", icon: <IoTimeOutline /> },
      { title: "سال انتشار", answer: "2023", icon: <CiCalendar /> },
      {
        title: "نویسنده",
        answer: "Rhys Frake-Waterfield",
        icon: <BiEditAlt />,
      },
      { title: "لیست تماشای", answer: "26 کاربر", icon: <IoEyeOutline /> },
      { title: "مورد علاقه", answer: "26 کاربر", icon: <FaRegHeart /> },
    ],
    imdbRating: 2.9,
    category: "movie",
    subtitles: [
      {
        subType: "فارسی",
        urlSub:
          "https://subscene.com/subtitles/winnie-the-pooh-blood-and-honey/farsi_persian",
      },
      {
        subType: "انگلیسی",
        urlSub:
          "https://subscene.com/subtitles/winnie-the-pooh-blood-and-honey/english",
      },
    ],
    trainer:
      "https://www.youtube.com/embed/W3E74j_xFtg?si=An3W4RweyJzI2PwD",
    detail:
      "در فیلم وینی خرسه خون و عسل : روزهای ماجراجویی و شادی به پایان رسیده است، زیرا کریستوفر رابین، که اکنون یک مرد جوان است، وینی پو و پیگلت را به حال خود رها کرده است. با گذشت زمان، احساس عصبانیت و رها شدن، این دو وحشی می شوند. پس از چشیدن طعم خون، وینی پو و پیگلت برای یافتن منبع غذایی جدیدی به راه افتادند. طولی نکشید که حمله خونین آنها آغاز شد.",
    comments: [
      {
        id: 1,
        author: "Darling016",
        contetnt: "بدترین فیلمی که تا بحال دیدم!",
        timeComment: "۲۹ اسفند ۱۴۰۲ ۱۳:۰۸",
        replies: [],
      },
      {
        id: 3,
        author: "user_15245",
        contetnt: "تو چشمام اسید میریختن بهتر بود تا این سم و ببینم",
        timeComment: "۲۹ اسفند 1403 ۱۳:۰۸",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    url: "winnie-the-pooh-2",
    imgUrl: "pooh-2.jpg",
    title: "Winnie-the-Pooh: Blood and Honey 2 2024",
    persianTitle: "",
    imgHeader: "pooh-bg-2.jpg",
    timeMovie: "55",
    gdnre: [
      { title: "ترسناک", url: "/horror" },
      { title: "هیجان انگیز", url: "/thriller" },
    ],
    detailMovieList: [
      { title: "محصول کشور", answer: "انگلستان", icon: <TbWorld /> },
      { title: "زبان اصلی", answer: "انگلیسی", icon: <MdOutlineTranslate /> },
      { title: "مدت زمان", answer: "1 ساعت 40 دقیقه", icon: <IoTimeOutline /> },
      { title: "سال انتشار", answer: "2024", icon: <CiCalendar /> },
      {
        title: "نویسنده",
        answer: "Rhys Frake-Waterfield",
        icon: <BiEditAlt />,
      },
      { title: "بودجه", answer: "1,000,000$", icon: <LuDollarSign /> },
      { title: "لیست تماشای", answer: "13 کاربر", icon: <IoEyeOutline /> },
      { title: "مورد علاقه", answer: "11 کاربر", icon: <FaRegHeart /> },
    ],
    imdbRating: 4.7,
    category: "movie",
    subtitles: [
      {
        subType: "فارسی",
        urlSub:
          "https://subscene.com/subtitles/winnie-the-pooh-blood-and-honey-2/farsi_persian",
      },
      {
        subType: "انگلیسی",
        urlSub:
          "https://subscene.com/subtitles/winnie-the-pooh-blood-and-honey-2/english",
      },
    ],
    trainer:
      "https://www.youtube.com/embed/i9-jhznkB3g?si=OCIyCzUafo-M0mCQ",
    detail:
      "دانلود فیلم Winnie-the-Pooh: Blood and Honey 2 2024 با تماشای آنلاین",
    comments: [],
  },
  {
    id: 6,
    url: "may-december-2023",
    imgUrl: "may-december-1.jpg",
    title: "May December 2023",
    persianTitle: "مه/دسامبر",
    imgHeader: "may-december-bg-2.jpg",
    timeMovie: "55",
    gdnre: [
      { title: "درام", url: "/drama" },
      { title: "عاشقانه", url: "/romance" },
    ],
    detailMovieList: [
      { title: "محصول کشور", answer: "آمریکا", icon: <TbWorld /> },
      { title: "زبان اصلی", answer: "انگلیسی", icon: <MdOutlineTranslate /> },
      { title: "مدت زمان", answer: "1 ساعت 57 دقیقه", icon: <IoTimeOutline /> },
      { title: "رده سنی", answer: "R", icon: <PiPersonArmsSpread /> },
      { title: "سال انتشار", answer: "2023", icon: <CiCalendar /> },
      {
        title: "نویسنده",
        answer: "Samy Burch",
        icon: <BiEditAlt />,
      },
      { title: "لیست تماشای", answer: "745 کاربر", icon: <IoEyeOutline /> },
      { title: "مورد علاقه", answer: "579 کاربر", icon: <FaRegHeart /> },
    ],
    imdbRating: 4.7,
    category: "movie",
    subtitles: [
      {
        subType: "فارسی",
        urlSub: "https://subscene.com/subtitles/may-december/farsi_persian",
      },
      {
        subType: "انگلیسی",
        urlSub: "https://subscene.com/subtitles/may-december/english",
      },
    ],
    trainer:
      "https://www.youtube.com/embed/BBKb1WoXokc?si=0AgKKwCQEOcYDA6p",
    detail:
      "یک زوج بیست سال پس از اینکه رابطه پرشور و پرحاشیه‌شان ملت را به خود جلب کرد، اکنون با ورود یک بازیگر زن به شهرشان برای تحقیق در مورد رابطه‌ و گذشته آنها، تحت فشار قرار می‌گیرند و به چالش کشیده می‌شوند.",
    comments: [
      {
        id: 1,
        author: "Darling016",
        contetnt:
          "فیلمی نیست که به سلیقه همه بخوره ولی اگر به فیلم هایی با مضامین روانشناختی علاقه دارین این فیلم رو پیشنهاد میکنم. فیلم بصورت روایتی که نقطه آغاز یا پایان داشته باش نیست...دنبال هیجان و درامای سینوسی نباشین. فیلم مفهوم عشق رو به چالش کشیده و به کارکرد روابط انسانی پرداخته! جالبه انی وی...بر اساس داستان واقعی هم هست. الهام گرفته شده بهتره بگم",
        timeComment: "۲۹ اسفند ۱۴۰۲ ۱۳:۰۸",
        replies: [],
      },
    ],
  },
  {
    id: 7,
    url: "the-boys-2019",
    imgUrl: "the-boys-1.jpg",
    title: "The Boys 2019",
    persianTitle: "پسران",
    imgHeader: "the-boys-bg-2.jpg",
    timeMovie: "55",
    gdnre: [
      { title: "درام", url: "/drama" },
      { title: "اکشن", url: "/action" },
      { title: "جنایی", url: "/crime" },
      { title: "علمی-تخیلی", url: "/sci-fi" },
    ],
    detailMovieList: [
      { title: "محصول کشور", answer: "آمریکا", icon: <TbWorld /> },
      { title: "زبان اصلی", answer: "انگلیسی", icon: <MdOutlineTranslate /> },
      { title: "مدت زمان", answer: "60 دقیقه", icon: <IoTimeOutline /> },
      { title: "وضعیت", answer: "در حال پخش", icon: <PiBroadcast /> },
      {
        title: "قسمت بعدی",
        answer: "۳۱ خرداد ۱۴۰۳ پنج شنبه",
        icon: <PiMegaphone />,
      },
      { title: "رده سنی", answer: "TV-MA", icon: <PiPersonArmsSpread /> },
      { title: "سال انتشار", answer: "2019", icon: <CiCalendar /> },
      {
        title: "شبکه",
        answer: "Prime Video",
        icon: <PiTelevisionSimpleLight />,
      },
      {
        title: "نویسنده",
        answer: "Garth Ennis",
        icon: <BiEditAlt />,
      },
      { title: "لیست تماشای", answer: "2459 کاربر", icon: <IoEyeOutline /> },
      { title: "مورد علاقه", answer: "2349 کاربر", icon: <FaRegHeart /> },
    ],
    imdbRating: 4.7,
    category: "series",
    subtitles: [
      {
        subType: "فارسی فصل 1",
        urlSub: "https://subscene.com/subtitles/the-boys-first-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 1",
        urlSub: "https://subscene.com/subtitles/the-boys-first-season/english",
      },
      {
        subType: "فارسی فصل 2",
        urlSub: "https://subscene.com/subtitles/the-boys-second-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 2",
        urlSub: "https://subscene.com/subtitles/the-boys-second-season/english",
      },
      {
        subType: "فارسی فصل 3",
        urlSub: "https://subscene.com/subtitles/the-boys-third-season/farsi_persian",
      },
      {
        subType: "انگلیسی فصل 3",
        urlSub: "https://subscene.com/subtitles/the-boys-third-season/english",
      },
    ],
    trainer:
      "https://www.youtube.com/embed/tcrNsIaQkb4?si=h-RxrjCv7CXQIzVG",
    detail:
      "یک گروه از پارتیزان های جوان تصمیم به نابودی ابرقهرمانان فاسدی می گیرند که از قدرت خود سوءاستفاده می کنند.",
      comments: [
        {
          id: 1,
          author: "Darling016",
          contetnt: "فصل چهار ضعیف ترین پریمیر تمام فصلارو فعلا تا اینجا داشته ،سه قسمت اول که فعلا اومده ،واقعا از لحاظ نویسندگی،کارگردانی،دیالوگ ،اکشن و حتی منطق خود سریال واقعا خیلی ضعیف تر شده نسبت به فصلای قبل ،امیدوارم ادامه ش بهتر باشه .",
          timeComment: "۲۹ اسفند ۱۴۰۲ ۱۳:۰۸",
          replies: [
            {
              id: 2,
              author: "user_184155",
              relpy: "من اصلا با این نظر موافق نیستم. توی همین سه قسمت کلی اتفاق افتاده و داریم تغییرات اساسی هوملندر رو میبینیم. فقط داستان فرنچی یه کم افت کرده. شاید قراره حذف بشه.",
              timeReply: "۲۹ اسفند ۱۴۰۲ ۱۳:۰۸",
            },
          ],
        },
        {
          id: 3,
          author: "user_15245",
          contetnt:
            "چرا اینجوری شد فصل چهار اون چیزی که تو ذهن من بود از سریال با این سه قسمت اصلا همخونی نداشت مثلا یعنی چی همه در کسری از ثانیه متحول میشن و تصمیمشون رو عوض می کنند؟ اینجوری بخواد ادامه پیدا کنه امیدی بهش نخواهد بود",
          timeComment: "۲۹ اسفند 1403 ۱۳:۰۸",
          replies: [],
        },
      ],
  },
];

export default movieData;
