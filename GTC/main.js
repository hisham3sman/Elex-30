
window.onload = function () {

    var alphabet = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ى", "ئ", "ء", "ة"];
    var score = 0;
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint;          // Word getHint
    var word;              // Selected word
    var guess;             // Geuss
    var geusses = [];      // Stored geusses
    var lives;             // Lives
    var counter;           // Count correct geusses
    var space;              // Number of spaces in word '-'
    var wordIndex;          // word index in it's array

    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
    var img = document.querySelector('#img-holder img')
    var reset = document.querySelector('#reset')
    var next = document.querySelector('#next')
    var buttonsdiv = document.querySelector('#buttons')
    var imgHolder = document.querySelector('#img-holder')
    // var myword = document.querySelector('#my-word')


    // create alphabet ul
    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // Select Catagory
    var selectCat = function () {
        if (categories.length === 3) {
            if (chosenCategory === categories[0]) {
                catagoryName.innerHTML = "شخصية من الدفعة 30";
            } else if (chosenCategory === categories[1]) {
                catagoryName.innerHTML = "شخصية من الدفعة 29";
            } else if (chosenCategory === categories[2]) {
                catagoryName.innerHTML = "شخصية عامة";
            }
        } else if (categories.length === 2) {
            if (chosenCategory === categories[0]) {
                catagoryName.innerHTML = "شخصية من الدفعة 30";
            } else if (chosenCategory === categories[1]) {
                catagoryName.innerHTML = "شخصية عامة";
            }
        } else {
            catagoryName.innerHTML = ""
        }
    }
    // Create geusses ul
    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }
    // console.log(document.styleSheets[0].rules)

    // Show lives
    comments = function () {
        showLives.innerHTML = "❤".repeat(lives);
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
            showLives.style.cssText = 'font-size:30px;color:red'
            document.querySelector('ul').style.display = 'none';
            reset.style.display = 'block';
            document.querySelector('#categoryName , #clue').style.display = 'none'
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                // showLives.innerHTML = "صح";
                showLives.style.color = 'green';
                document.querySelector('#my-word').style.cssText = 'color:green;font-weight:bold;'
                document.querySelectorAll('#alphabet #letter').forEach(function (li) { li.classList.add('active'); li.onclick = null })
                // document.querySelectorAll("#alphabet #letter").forEach(function (li) { li.onclick = null })
                if (chosenCategory === categories[0]) {
                    score += 3
                } else if (chosenCategory === categories[1]) {
                    score += 4
                } else {
                    score += 5
                }
                // score++;
                document.querySelector('.score span').innerHTML = score;
                img.style.cssText = 'filter:blur(0px)';
                next.style.display = 'block'
                break;
                // replay()
            }
        }
    }

    // // Animate man
    // var animate = function () {
    //     var drawMe = lives;
    //     drawArray[drawMe * 2]();
    //     drawArray[drawMe * 2 + 1]();
    // }


    // // Hangman
    // canvas = function () {

    //     myStickman = document.getElementById("stickman");
    //     context = myStickman.getContext('2d');
    //     context.beginPath();
    //     context.strokeStyle = "#fff";
    //     context.lineWidth = 2;
    // };

    // head = function () {
    //     myStickman = document.getElementById("stickman");
    //     context = myStickman.getContext('2d');
    //     context.beginPath();
    //     context.arc(60, 25, 10, 0, Math.PI * 2, true);
    //     context.stroke();
    // }

    // draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

    //     context.moveTo($pathFromx, $pathFromy);
    //     context.lineTo($pathTox, $pathToy);
    //     context.stroke();
    // }

    // frame1 = function () {
    //     draw(0, 150, 150, 150);
    // };

    // frame2 = function () {
    //     draw(10, 0, 10, 600);
    // };

    // frame3 = function () {
    //     draw(0, 5, 70, 5);
    // };

    // frame4 = function () {
    //     draw(60, 5, 60, 15);
    // };

    // torso = function () {
    //     draw(60, 36, 60, 70);
    // };

    // rightArm = function () {
    //     draw(60, 46, 100, 50);
    // };

    // leftArm = function () {
    //     draw(60, 46, 20, 50);
    // };

    // rightLeg = function () {
    //     draw(60, 70, 100, 100);
    // };

    // leftLeg = function () {
    //     draw(60, 70, 20, 100);
    // };

    // drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];


    // OnClick Function
    check = function () {
        list.onclick = function () {
            var geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }
            var j = (word.indexOf(geuss));
            if (j === -1) {
                lives -= 1;
                comments();
                // animate();                           ///////////////////////////////////
            } else {
                comments();
            }
        }
    }
    var imagesArray;
    function setImgCatHint() {
        ////// img array 
        imagesArray = [
            ['images/faris.jpg', 'images/naira.jpg', 'images/omar yag.jpg', "images/asawer.jpg", 'images/ex leader.jpg', 'images/abbas.jpg',
                'images/star.jpg', 'images/must.jpg', 'images/mojtaba.jpg', 'images/ayman.jpg', 'images/elshafi3.jpg'
                , 'images/m jabeallah.jpg', "images/mutwakil.jpg", 'images/omar salah.jpg', "images/shmokh.jpg", 'images/omer waleed.jpg', 'images/m salah.jpg',
                "images/monty.jpg", 'images/hisham.jpg', 'images/alaa.jpg', 'images/abdelwahab.jpg', 'images/safsaf.jpg', 'images/layla.jpg', 'images/malak.jpg', 'images/mofti.jpg', 'images/nanika.jpg'],
            ['images/m rifaat.jpg', 'images/ragaei.jpg', 'images/awatif.jpg', 'images/mazen29.jpg', 'images/m asaad.jpg', "images/mj.jpg", "images/basil.jpg"
                , "images/twitty.jpg", 'images/albaraa.jpg', 'images/esam.jpg', 'images/tarig.jpg'],
            ["images/mahtma.jpg", 'images/newten.jpg', 'images/gifara.jpeg', 'images/nancy.jpg', 'images/tesla.jpeg', 'images/dicart.jpeg', "images/markmanson.jpg", "images/grizman.jpg", "images/mpape.jpg"
                , "images/albokhary.png", "images/daglo.jpg", 'images/wdalamin.jpg', "images/jamesclear.jpg", 'images/michelj.jpeg', 'images/abdelhaleem.jpg', "images/bigr.jfif", 'images/alhoot.jpg'
                , 'images/alexander.jpg', 'images/ahmed mekky.jpg', 'images/frazdag.jpg', 'images/gosho.jpg', 'images/altayeb.jpg']
            // ['images/faris.jpg', 'images/naira.jpg'],
            // ['images/m rifaat.jpg', 'images/esam.jpg'],
            // ['images/daglo.jpg', 'images/nancy.jpg']
        ]
        ///////////////
        // categories
        categories = [
            ["فارس", "نايرة", "عمر يعقوب", "اساور", "قوقل", "عباس",
                "محمد الصادق", "مصطفى", "مجتبى", "ايمن", "الشفيع"
                , "جيب الله", "متوكل", "عمر صلاح", "شموخ", "عمر وليد", "محمد صلاح"
                , "محمد منتصر", "هشام", "الاء", "عبدالوهاب", "صفية", "ليلى", "ملك", "مفتي", "نانيكا"],
            ["رفعت", "رجائي", "عواطف", "مازن", "محمد اسعد", "امجي", "باسل",
                "تويتي", "البراء", "عصام", "طارق"],
            ["غاندي", "نيوتن", "جيفارا", "نانسي", "تسلا", "ديكارت", "مارك مانسون", "جريزمان", "مبابي"
                , "البخاري", "حميدتي", "ودالامين", "جيمس كلير", "مايكل جاكسون", "عبدالحليم", "بيجرامي", "الحوت"
                , "الكسندر صديق", "احمد مكي", "الفرزدق", "غوشو اوياما", "الطيب صالح"]
            // ["هشام", "ماد"], ["باسل", "راد"], ["تسلا", "كات"]
        ];
        // hints array 
        hints = [
            ["دقنه وشكله بخلوك تقول أنه عمرو 25 ، وجنه قمصان أكمام طويلة", "في الرابطة ومن ناس هاي وياي على قول أحد عملائي للإستخبارات", "في الرابطة وأول أيام كان ما ظاهر عديل من الجامعة للبيت ، عارفنه إسم بس", "اور", "اول أيام كان مركب مكنة توماس شيلبي", "قصير وشكله سنير سنير كدا",
                "شال قروش الشير بتاعت اول اسبوع واشتري بيها جوردن الوسخ", "في الرابطة وخارجياته كتيرة", "من المرشحين لنيل لقب 'البروف'", "لو صاحبه قاليه اشرح لي بوزعه لكن مستعد يشرح لألف بت", "ما بتلقاه حايم مع أقل من 5 بنات"
                , "أكبر مطبلاتي لأتاك ومكرش على 343 بت", "ملك الرسم الهندسي ، الدفعة بتكون بتثبت في الورقة وهو بسأل من أبعاد الرسمة التالتة", "ما بظهر كتير وتاني أغتت زول ، وواحد من العمرات", "بتكون فارغة وبتاعت هظار الوقت كلو لكن ممكن تقلب وتفور زي الخميرة", "دخلوه الرابطة فزع بقى وجع", "ود دكتور في الجامعة ، وأغتت زول في الدفعة ، بعد كل محاضرة بسأل الدكتور و مساعدين التدريس من حاجات ما قالوها اصلا",
                "أحسن زول بظبط بوش في البلد", "أحسن وأوسم وأظرف زول في الدفعة ، ودايماً ممتعكم الله يحفظه", "بتقدر تغير جو أي مكان بتكون فيه ، وعارفة ملفات الأولاد كلهم", "الكابتن الوسخ الخلا كهرباء تضربنا 7 -0", "قصيرة وإجتماعية مع ناس 29 أكتر من ناس دفعتها", "جعارة الدفعة والهراشة ، ولو بقت الليدر كان عذبتنا عذاب", "رسامة وكاتبة ، مشكلتها كلامها كتير في القروبات", "عسووولي و'إيمانه'بربنا كبير ", "لابسة نظارة وكمامة 24/7 ، ومن اللاعبين المهمين في الشطرنج"],
            ["حفار وفي ناس مطلعين فيه إشاعة إنه بتاع بنات (هي حقيقة ما إشاعة لكن أنا قلت كدا عشان ما يزعل)", "حلبي وطويل وبتاع دكتورات", "مشكلته انه زمبار ، و بلقبوه بإسم بت (أكتب إسم البت)", "أبجيقة و فنان", "شيخ الدفعة", "إجتماعياته فل ، وشعره ممكن تهرب فيه مخدرات عديل", "أطول زول في الدفعة ، ومن الناس النادرين العندهم دقن في الدفعة الكلها 'ملط' دي"
                , "طلاس وعنصري", "بياكل كتير لدرجة ان من القابه 'أشعب الأكول'", "معذب البنات ومتعدد المواهب ، منها البيتبوكس", "الحوت فرع اليكس 29"],
            ["الزعيم الروحي للهند", "عالم فيزيائي تنسب له قوانين الحركة والتناسب", "ثوري كوبي ماركسي ارجنتيني الأصل ، طبيب وكاتب", "أكتر فنانة سودانية وقفت مع ثورة الشعب السوداني", "مخترع وفيزيائي ومهندس كهربائي وميكانيكي صربي الأصل", "مخترع الهندسة التحليلة", "مؤلف كتاب 'فن اللامبالاة'", "لاعب كرة قدم فرنسي من أصول برتغالية ، حاليا يلعب في أتلتيكو مدريد", "لاعب كرة قدم فرنسي حاز على لقب هداف الدوري الفرنسي ثلاث مرات",
                "مؤلف واحد من أبرز كتب الحديث النبوي ، استغرق جمعه وتحريره 16 عام ، وأنتقى أحاديثه من 600 ألف حديث", "سبب البلاوي الفي البلد دي كلها الله يلعنه", "فنان سوداني يغضب من غناء الجمهور", "مؤلف كتاب 'العادات الذرية'", "مغني أمريكي يلقب ب'ملك البوب'", "من أشهر الفنانين المصريين ويلقب ب'العندليب الأسمر'", "لاعب كمال أجسام مصري ، فاز بلقب مستر أولمبيا لعامي 2020 - 2021", "أكثر الفنانين السودانيين تأثيراً ، ولد في بحري المزاد"
                , "نجم هوليودي سوداني الأصل ، شارك في العديد من الأعمال العالمية منها المسلسلين الشهيرين 'Game Of Thrones'و'Peaky Blinders'", "ممثل ومخرج ورابر مصري من أصول جزائرية ", "من أبرز شعراء العصر الأموي ، يكنى بأبي فراس ، قيل لولا شعره لذهب ثُلث لغة العرب ونصف أخبار الناس", "مؤلف مانجا الأنمي الشهير 'المحقق كونان'", "أديب وصحفي سوداني يعد واحد من أشهر الأدباء العرب ، أُطلق عليه لقب 'عبقري الرواية العربية'"]
            // ['بتاع امور', "هناي"], ["كر", "مر"], ["مس", "ترا"]
        ];
    }
    setImgCatHint()
    var nowHint;
    lives = 7;
    play = function () {
        img.style.cssText = 'filter:blur(20px)';

        if (categories.length === 0) {

            // delete elements
            buttonsdiv.style.display = 'none';
            imgHolder.style.display = 'none';

            reset.style.display = 'none';
            next.style.display = 'none';
            document.querySelector('button#hint').style.display = 'none';
            document.querySelector('#categoryName , #clue , #mylives , .wrapper:first-child p').style.display = 'none';

            /////set body style and won sentence
            catagoryName.innerHTML = 'مبروك ، عرفت كل الشخصيات في المرحلة دي<br>ودا بدلّ على انك إجتماعي ومثقف في نفس الوقت';
            catagoryName.style.cssText = 'color: #fe7028;font-size: 31px;box-shadow: 0 0 10px;border-radius: 5px;padding: 10px;';
            document.querySelector('.score').style.cssText = 'color: green;font-size: 35px;width: fit-content;padding: 20px;box-shadow: 0 0 10px;';
            showLives.style.display = 'none';
            document.body.style.cssText = 'display: flex;flex-direction: column-reverse;justify-content: space-around;align-items: center;height:70vh;'
            return;
        }
        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        let wordWS = word;
        word = word.replace(/\s/g, "-");
        console.log(word, wordWS);
        console.log(categories.indexOf(chosenCategory));
        console.log(chosenCategory.indexOf(wordWS))
        console.log(categories[categories.indexOf(chosenCategory)][chosenCategory.indexOf(wordWS)]);
        console.log(imagesArray[categories.indexOf(chosenCategory)])
        img.setAttribute('src', imagesArray[categories.indexOf(chosenCategory)][chosenCategory.indexOf(wordWS)]);
        imagesArray[categories.indexOf(chosenCategory)].splice(chosenCategory.indexOf(wordWS), 1);

        // delete hint from hints array
        // hintsClone[catagoryIndex].splice(hintsClone[catagoryIndex].indexOf(hintsClone[catagoryIndex][hintIndex]), 1);
        nowHint = hints[categories.indexOf(chosenCategory)][chosenCategory.indexOf(wordWS)]
        hints[categories.indexOf(chosenCategory)].splice(chosenCategory.indexOf(wordWS), 1)


        // set word index so we can delete it from the array and doesn't effect the hint
        wordIndex = categories[categories.indexOf(chosenCategory)].indexOf(wordWS);

        console.log(chosenCategory)
        // console.log(categories[categories.indexOf(chosenCategory)].indexOf(word))

        categories[categories.indexOf(chosenCategory)].splice(chosenCategory.indexOf(wordWS), 1);
        console.log(chosenCategory)

        reset.style.display = 'none';
        next.style.display = 'none';
        buttons();

        geusses = [];
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        if (chosenCategory.length === 0) {
            console.log(categories)
            imagesArray.splice(categories.indexOf(chosenCategory), 1);
            hints.splice(categories.indexOf(chosenCategory), 1)
            categories.splice(categories.indexOf(chosenCategory), 1);
            console.log(categories)
            // return play();
        }
        // canvas();                ///////////////////////////////////
    }

    play();

    // Hint click

    var checked = false;
    hint.onclick = function () {
        // var hintsClone = hints;
        if (!checked) {
            var catagoryIndex = categories.indexOf(chosenCategory);
            // var hintIndex = wordIndex;
            // showClue.innerHTML = "تلميح : " + hints[catagoryIndex][hintIndex];
            showClue.innerHTML = "تلميح : " + nowHint;

            // console.log(hints[catagoryIndex])
            // console.log(hints[catagoryIndex].indexOf(hints[catagoryIndex][hintIndex]));
            // delete the hint that relative to the word
            console.log(nowHint);
            console.log(hints[catagoryIndex])
            // console.log(hints[0][0])
            checked = true;
        }
    };

    // Reset

    reset.onclick = function () {
        score = 0;
        document.querySelector('.score span').innerHTML = score;
        // context.clearRect(0, 0, 400, 400);               /////////////////////////////
        lives = 5;
        checked = false;
        document.querySelector('#categoryName , #clue').style.display = 'block'
        setImgCatHint()
        replay();
    }
    function replay() {
        document.querySelector('ul').style.display = 'block';
        showLives.style.cssText = 'font-size:25px;color:white';
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showClue.innerHTML = "";
        showLives.style.color = 'red';
        play();
    }
    next.onclick = function () {
        replay();
        checked = false;
    }
}