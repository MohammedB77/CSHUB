
let a11yEnabled = localStorage.getItem("a11y") === "true";


function speak(text) {
  if (!text || !a11yEnabled) return;

  speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ar-SA";

  u.rate = 1.5;

  speechSynthesis.speak(u);
}

const toggleBtn = document.querySelector(".a11y-toggle");

function updateButton() {
  if (!toggleBtn) return;

  toggleBtn.classList.toggle("active", a11yEnabled);
  toggleBtn.setAttribute("aria-pressed", a11yEnabled);
}

updateButton();

toggleBtn?.addEventListener("click", () => {
  a11yEnabled = !a11yEnabled;
  localStorage.setItem("a11y", a11yEnabled);
  updateButton();


  speechSynthesis.cancel();

  const msg = a11yEnabled
    ? "تم تفعيل وضع الاحتياجات الخاصة"
    : "تم إيقاف وضع الاحتياجات الخاصة";

  const u = new SpeechSynthesisUtterance(msg);
  u.lang = "ar-SA";
  u.rate = 1.8;
  speechSynthesis.speak(u);
});


document.getElementById("home")?.addEventListener("click", (e) => {
  speak("أهلاً وسهلاً بك في الصفحة الرئيسية لقسم علوم الحاسوب. هنا تبدأ رحلتك للتعرّف على التخصص وما يميّزه من مهارات وفرص مستقبلية.");
});

document.getElementById("studyplan")?.addEventListener("click", (e) => {
  speak("هذه صفحة الخطة الدراسية، وفيها تشوف المقررات مرتبة بشكل واضح عشان تعرف مسارك الدراسي خطوة بخطوة.");
} );

document.getElementById("student-resources")?.addEventListener("click", (e) => {
  speak("أنت الآن في صفحة أدوات الطالب، حيث جمعنا لك أهم الروابط والموارد اللي تساعدك أثناء دراستك وتسهّل عليك التعلم.");
} );

document.getElementById("certificates")?.addEventListener("click", (e) => {
  speak("هذه صفحة الشهادات المهنية، وبتتعرف فيها على الشهادات اللي ممكن تقوّي سيرتك الذاتية وتفتح لك فرص أفضل بعد التخرج.");
} );

document.getElementById("intro-text")?.addEventListener("click", () => {
  speak("ابدأ مشوارك الجامعي في علوم الحاسب بسهولة");
});


document.getElementById("about-title")?.addEventListener("click", () => {
speak("عن التخصص");
});

document.getElementById("traits-title")?.addEventListener("click", () => {
  speak("صفات أخصائي علوم الحاسوب");
});


document.getElementById("skills-title")?.addEventListener("click", () => {
  speak("مهارات أخصائي علوم الحاسوب");
});

document.getElementById("what-is-cs")?.addEventListener("click", () => {
  speak("ما هو تخصص علوم الحاسب؟ علوم الحاسب هو العلم الذي يدرس العمليات المرتبطة بالبيانات وكيفية تمثيلها على شكل برامج، ويعتمد على النظريات والتجارب والهندسة لتوظيف الخوارزميات في معالجة وتخزين ونقل المعلومات الرقمية.");
});

document.getElementById("cs-future")?.addEventListener("click", () => {
  speak("مستقبل التخصص. نمو المجال يواكب احتياجات السوق والتقنيات الحديثة عالميًا.");
});

document.getElementById("cs-impact")?.addEventListener("click", () => {
  speak("أثر التخصص. علوم الحاسب يساهم في تحسين التعليم والصحة والأعمال والخدمات المستقبلية.");
});

document.querySelectorAll(".skill, .trait").forEach(el => {
  el.addEventListener("click", () => {
    speak(el.innerText.trim());
  });
});

const footer = document.querySelector(".site-footer");

footer?.addEventListener("click", (e) => {

  if (e.target.closest(".email-input")) {
    speak("البريد الإلكتروني للتواصل  ");
    return;
  }

  if (e.target.closest(".instagram")) {
    speak("حساب دفعتنا كودرز 9");
    return;
  }

  if (e.target.closest(".telegram-icon")) {
    speak("الانتقال إلى بوت الدفعة على تيليجرام");
    return;
  }

  if (e.target.closest(".bot-box")) {
    speak("بوت الدفعة للملخصات والملازم والنماذج. كل ما تحتاجه موجود هنا لتسهيل دراستك.");
    return;
  }

  if (e.target.closest(".contact-box")) {
    speak("قسم تواصل معنا");
    return;
  }

  if (e.target.closest(".copyright")) {
    speak("تم الإنشاء بواسطة اللجنة العلمية بدفعة كودرز  جميع الحقوق محفوظة.");
    return;
  }

});


document.querySelector(".main-title")?.addEventListener("click", () => {
  speak("قسم علوم الحاسوب");
});



document.querySelector(".subtitle")?.addEventListener("click", () => {
  speak("مدة الدراسة ثمانية فصول دراسية");
});


document.querySelector(".alert-box")?.addEventListener("click", () => {
  speak(
    "تم تجهيز المقررات الدراسية بالترميز عال، " +
    "وهو الترميز الخاص بقسم علوم الحاسوب."
  );
});

document.querySelectorAll(".course-table tbody tr").forEach(row => {
  row.addEventListener("click", () => {

    const cells = row.querySelectorAll("td");
    if (cells.length < 6) return;

    const code   = cells[1].innerText.trim();
    const name   = cells[2].innerText.trim();
    const theory = cells[3].innerText.trim();
    const lab    = cells[4].innerText.trim();
    const hours  = cells[5].innerText.trim();

    const text =
      `المقرر ${name}. ` +
      `رمز المقرر ${code}. ` +
      `نظري ${theory} ساعات. ` +
      `عملي ${lab} ساعات. ` +
      `إجمالي الساعات ${hours}.`;

    speak(text);
  });
});


document.getElementById("subscriptions-title")?.addEventListener("click", () => {
  speak("البعض من الاشتراكات المميزة");
});;




document.querySelector(".university-email-header h1")?.addEventListener("click", () => {
  speak("البريد الجامعي");
});

document.querySelector(".university-email-header p")?.addEventListener("click", () => {
  speak("يوفر البريد الجامعي وصولًا إلى حزمة جيتهب التعليمية وتطبيقات مايكروسوفت أوفيس وخدمات الذكاء الاصطناعي.");
});




document.querySelectorAll(".subscription-card")[0]?.addEventListener("click", () => {
  speak("داتا كامب. منصة تعليمية تساعدك على تعلم تحليل البيانات والبرمجة على يد خبراء عالميين.");
});

document.querySelectorAll(".subscription-card")[1]?.addEventListener("click", () => {
  speak("فرونت إند ماسترز. منصة متخصصة في تطوير الويب تقدم دورات متعمقة في JavaScript و Node.js وهندسة الواجهات الأمامية.");
});

document.querySelectorAll(".subscription-card")[2]?.addEventListener("click", () => {
  speak("كوديديكس. منصة لتعلم البرمجة بطريقة ممتعة وتفاعلية فيها دورات في Python, HTML, CSS, JavaScript, React, Git وغيرها.");
});

document.querySelectorAll(".subscription-card")[3]?.addEventListener("click", () => {
  speak("سكريمبا. منصة تفاعلية لتعلم تطوير الواجهات الأمامية. تقدم دورات ومشاريع وتحديات برمجية.");
});

document.querySelectorAll(".subscription-card")[4]?.addEventListener("click", () => {
  speak("فيزمي. منصة شاملة تساعدك على إنشاء عروض تقديمية جذابة وتفاعلية، مستندات بصرية، تصوّرات بيانات، وفيديوهات قصيرة، ومحتوى بصري مميز.");
});

document.querySelectorAll(".subscription-card")[5]?.addEventListener("click", () => {
  speak("جيت كراكن. برنامج يسهّل إدارة مشاريع Git بواجهة رسومية واضحة. ويتكامل مع GitHub عشان تدير التعديلات والمشاكل في نفس المكان.");
});



document.querySelector(".registration-link-section .link-item")
  ?.addEventListener("click", () => {
    speak("رابط التسجيل في  قيتهب  للحصول على المزايا التعليمية.");
  });

if (document.body.classList.contains("certificates-page")) {

  document.getElementById("page-title")?.addEventListener("click", () => {
    speak("الشهادات المهنية");
  });

  document.getElementById("page-desc")?.addEventListener("click", () => {
    speak("استكشف الشهادات المهنية المعتمدة في علوم الحاسوب والتي تعزز خبراتك خطوة بخطوة");
  });


  function readCert(card) {
    const name = card.querySelector(".cert-name")?.innerText.trim();
    const desc = card.querySelector(".cert-description")?.innerText.trim();
    const details = card.querySelectorAll(".detail-item");
    const duration = details[0]?.innerText.replace("المدة:", "").trim();
    const level    = details[1]?.innerText.trim();
    const provider = details[2]?.innerText.trim();

    const text =
      `الشهادة ${name}. ` +
      `${desc}. ` +
      `مدتها ${duration}. ` +
      `المستوى ${level}. ` +
      ` من ${provider}.`;

    speak(text);
  }


  document.querySelectorAll(".cert-card").forEach(card => {
    card.addEventListener("click", () => readCert(card));
  });

window.addEventListener("DOMContentLoaded", () => {

  const finalTitle = document.getElementById("final-title");
  const finalText  = document.getElementById("final-text");

  // عند الضغط على العنوان
  finalTitle?.addEventListener("click", () => {
    speak("كلمة أخيرة");
  });

  // عند الضغط على النص
  finalText?.addEventListener("click", () => {
    speak("وفي الختام، إن لسعيك رحلة قد تطول ولكنها تستحق كل خطوة خطوتها. نتمنى لكم كل التوفيق والنجاح.");
  });

});}

/* ===== البوكسات السبعة حول الصورة ===== */

document.getElementById("idea-1")?.addEventListener("click", () => {
  speak("المادة الواحدة تخدم أكثر من مجال. الفكرة التي تتعلمها اليوم ستستخدمها لاحقًا في أكثر من سياق أو تطبيق مختلف.");
});


document.getElementById("idea-2")?.addEventListener("click", () => {
  speak("الفهم المبكر يغير طريقة دراستك. عندما تفهم معنى المادة ودورها تتعامل معها بتركيز واهتمام أكبر.");
});

document.getElementById("idea-3")?.addEventListener("click", () => {
  speak("ربط المواد يعطيها معنى أوضح. عندما تربط ما تدرسه الآن بما ستدرسه لاحقًا يتضح سبب وجود كل مادة.");
});


document.getElementById("idea-4")?.addEventListener("click", () => {
  speak("الدراسة بدون فهم الهدف تقلل الاهتمام. عندما تدرس مادة ولا تعرف لماذا تدرسها غالبًا تتعامل معها كحفظ فقط.");
});


document.getElementById("idea-5")?.addEventListener("click", () => {
  speak("المفاهيم تبدأ بسيطة ثم تُبنى عليها لاحقًا. ما تدرسه في البداية سيستخدم مرة أخرى بشكل أوسع وأعمق.");
});


document.getElementById("idea-6")?.addEventListener("click", () => {
  speak("جزء من سلسلة وليس خطوة لحالها. كل مادة تعتمد على التي قبلها وفهم الترابط يسهل استيعاب التخصص.");
});

document.getElementById("idea-7")?.addEventListener("click", () => {
  speak("الصورة الذهنية الكاملة للتخصص. المواد ليست مراحل منفصلة بل أجزاء تبني معًا مشاريع وأنظمة حقيقية.");
});

document.getElementById("idea-8")?.addEventListener("click", () => {
  speak("مواد التخصص. هنا ستجد مدخل يعرفك بطبيعة مواد التخصص ودور بعض المواد في بناء فهمك التقني.");
});



        (() => {
            const wrapper = document.getElementById("globeWrapper");
            const globe = document.getElementById("globeArc");
            const symbolsContainer = globe?.querySelector(".globe-code-symbols");

            if (!wrapper || !globe || !symbolsContainer) return;

            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            /*
             * عشرة رموز برمجية فقط.
             */
            const codeSymbols = [
                "</>",
                "{ }",
                "[ ]",
                "if()",
                "API",
                "SQL",
                "HTML",
                "CSS",
                "JS",
                "01"
            ];

            const symbolElements = Array.from(
                symbolsContainer.querySelectorAll(".globe-code-symbol")
            ).slice(0, 10);

            symbolElements.forEach((symbol, index) => {
                symbol.textContent = codeSymbols[index];
                symbol.classList.remove("is-visible", "is-hiding");
            });

            /* متغيرات حركة النقاط */
            let dotsX = 0;
            let dotsY = 0;

            let pointerStartX = 0;
            let pointerStartY = 0;

            let startX = 0;
            let startY = 0;

            let dragging = false;
            let previousTime = performance.now();
            let lastGapChange = 0;

            const DOT_SPEED_X = 3.2;
            const DOT_SPEED_Y = 1.15;
            const DRAG_SPEED = 0.65;

            function renderDots() {
                globe.style.setProperty("--dots-x", `${dotsX}px`);
                globe.style.setProperty("--dots-y", `${dotsY}px`);
            }

            function randomBetween(min, max) {
                return Math.random() * (max - min) + min;
            }

            /*
             * تحريك أماكن الفراغات داخل شبكة النقاط.
             */
            function moveEmptyAreas() {
                globe.style.setProperty(
                    "--gap1-x",
                    `${randomBetween(15, 42)}%`
                );

                globe.style.setProperty(
                    "--gap1-y",
                    `${randomBetween(15, 42)}%`
                );

                globe.style.setProperty(
                    "--gap2-x",
                    `${randomBetween(56, 82)}%`
                );

                globe.style.setProperty(
                    "--gap2-y",
                    `${randomBetween(20, 49)}%`
                );

                globe.style.setProperty(
                    "--gap3-x",
                    `${randomBetween(32, 66)}%`
                );

                globe.style.setProperty(
                    "--gap3-y",
                    `${randomBetween(43, 66)}%`
                );
            }

            /* تحريك شبكة النقاط */
            function animateDots(time) {
                const delta = Math.min(
                    (time - previousTime) / 1000,
                    0.05
                );

                previousTime = time;

                if (!dragging && !reduceMotion) {
                    dotsX += DOT_SPEED_X * delta;
                    dotsY += DOT_SPEED_Y * delta;

                    if (dotsX >= 22) {
                        dotsX -= 22;
                    }

                    if (dotsY >= 22) {
                        dotsY -= 22;
                    }
                }

                /* تغيير أماكن الفراغات كل 9 ثوانٍ */
                if (
                    !reduceMotion &&
                    time - lastGapChange > 9000
                ) {
                    moveEmptyAreas();
                    lastGapChange = time;
                }

                renderDots();
                requestAnimationFrame(animateDots);
            }

            /* اختيار موضع جديد للرمز */
            function placeSymbol(symbol) {
                symbol.style.left = `${randomBetween(10, 84)}%`;
                symbol.style.top = `${randomBetween(12, 68)}%`;
            }

            /*
             * تبديل الرموز تدريجيًا.
             */
            function scheduleNextChange(symbol) {
                const delay = randomBetween(12000, 18000);

                window.setTimeout(() => {
                    symbol.classList.remove("is-visible");
                    symbol.classList.add("is-hiding");

                    window.setTimeout(() => {
                        const current = symbol.textContent;

                        const choices = codeSymbols.filter(
                            value => value !== current
                        );

                        symbol.textContent = choices[
                            Math.floor(Math.random() * choices.length)
                        ];

                        placeSymbol(symbol);
                        symbol.classList.remove("is-hiding");

                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                symbol.classList.add("is-visible");
                            });
                        });

                        scheduleNextChange(symbol);
                    }, 1700);
                }, delay);
            }

            /* إظهار الرموز تدريجيًا */
            symbolElements.forEach((symbol, index) => {
                placeSymbol(symbol);

                window.setTimeout(() => {
                    symbol.classList.add("is-visible");
                    scheduleNextChange(symbol);
                }, index * 850);
            });

            /* دعم السحب بالماوس أو اللمس */
            wrapper.addEventListener("pointerdown", event => {
                dragging = true;

                pointerStartX = event.clientX;
                pointerStartY = event.clientY;

                startX = dotsX;
                startY = dotsY;

                wrapper.classList.add("is-dragging");

                if (wrapper.setPointerCapture) {
                    wrapper.setPointerCapture(event.pointerId);
                }
            });

            wrapper.addEventListener("pointermove", event => {
                if (!dragging) return;

                dotsX = startX +
                    (event.clientX - pointerStartX) * DRAG_SPEED;

                dotsY = startY +
                    (event.clientY - pointerStartY) * DRAG_SPEED;

                renderDots();
            });

            function stopDragging() {
                if (!dragging) return;

                dragging = false;
                wrapper.classList.remove("is-dragging");
            }

            wrapper.addEventListener("pointerup", stopDragging);
            wrapper.addEventListener("pointercancel", stopDragging);
            wrapper.addEventListener("lostpointercapture", stopDragging);

            /* احترام إعداد تقليل الحركة */
            if (reduceMotion) {
                symbolElements.forEach(symbol => {
                    symbol.classList.add("is-visible");
                    symbol.style.transition = "none";
                });
            }

            moveEmptyAreas();
            renderDots();

            requestAnimationFrame(animateDots);
        })();
  
        
(() => {
    const wrapper = document.querySelector(".globe-wrapper");
    const globeArc = document.querySelector(".globe-arc");

    if (!wrapper || !globeArc) return;
    if (globeArc.dataset.surfaceMotion === "true") return;
    globeArc.dataset.surfaceMotion = "true";

    // إزالة طبقات الأكواد السابقة فقط
    globeArc.querySelectorAll(
        ".globe-dots-canvas, .globe-rotating-surface, .globe-three-canvas"
    ).forEach(el => el.remove());

    // Canvas شفاف فوق الكرة الأصلية
    const canvas = document.createElement("canvas");
    canvas.className = "globe-dots-canvas";

    Object.assign(canvas.style, {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: "1"
    });

    globeArc.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let rotation = 0;
    let tilt = 0;

    let dragging = false;
    let pointerId = null;
    let lastX = 0;
    let lastY = 0;
    let previousTime = 0;

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    // حدود تقريبية للقارات: خطوط الطول والعرض
    const continents = [
        [[-168,72],[-140,70],[-120,58],[-105,50],[-82,48],
         [-60,28],[-80,8],[-98,18],[-115,30],[-130,48],[-150,58]],

        [[-81,12],[-65,10],[-48,-5],[-36,-15],[-48,-35],
         [-68,-56],[-77,-30],[-82,-5]],

        [[-11,36],[5,35],[25,45],[40,58],[25,70],[5,62],[-10,52]],

        [[-17,35],[10,38],[35,25],[50,10],[35,-15],
         [20,-35],[5,-34],[-10,-5],[-17,20]],

        [[30,38],[45,58],[70,72],[110,68],[150,58],
         [170,45],[145,30],[120,10],[95,5],[75,20],[55,25]],

        [[95,20],[120,18],[135,5],[120,-10],[105,-5]],

        [[113,-12],[135,-10],[153,-25],[145,-40],[125,-43],[114,-30]],

        [[-53,82],[-25,75],[-40,60],[-60,65]],

        [[47,-13],[51,-17],[49,-26],[45,-20]]
    ];

    function insidePolygon(lon, lat, polygon) {
        let inside = false;

        for (let i = 0, j = polygon.length - 1;
             i < polygon.length; j = i++) {
            const [xi, yi] = polygon[i];
            const [xj, yj] = polygon[j];

            const crosses =
                ((yi > lat) !== (yj > lat)) &&
                lon < (xj - xi) * (lat - yi) /
                ((yj - yi) || 0.000001) + xi;

            if (crosses) inside = !inside;
        }

        return inside;
    }

    function isLand(lon, lat) {
        return continents.some(poly =>
            insidePolygon(lon, lat, poly)
        );
    }

    function resize() {
        const rect = globeArc.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        width = rect.width;
        height = rect.height;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        draw();
    }

    // رسم نقاط القارات على سطح كروي متحرك
    function draw() {
        if (!width || !height) return;

        ctx.clearRect(0, 0, width, height);

        const spacing = width < 600 ? 11 : 13;
        const radius = width < 600 ? 1.35 : 1.65;

        // شكل الكرة البيضاوي يتبع أبعاد الكرة الأصلية
        const cx = width / 2;
        const cy = height / 2;
        const rx = width * 0.495;
        const ry = height * 0.495;

        for (let lat = -82; lat <= 82; lat += 3.2) {
            for (let lon = -180; lon < 180; lon += 3.2) {
                // النقطة تبقى مرتبطة بقارتها الأصلية
                if (!isLand(lon, lat)) continue;

                const radLat = lat * Math.PI / 180;
                const radLon = (lon + rotation) * Math.PI / 180;

                // دوران رأسي بسيط لسطح الكرة
                const x0 = Math.cos(radLat) * Math.sin(radLon);
                const y0 = Math.sin(radLat);
                const z0 = Math.cos(radLat) * Math.cos(radLon);

                const cosT = Math.cos(tilt);
                const sinT = Math.sin(tilt);

                const y = y0 * cosT - z0 * sinT;
                const z = y0 * sinT + z0 * cosT;

                // النقاط على الجهة الخلفية تختفي خلف الكرة
                if (z <= 0.025) continue;

                const x = x0;

                const px = cx + x * rx;
                const py = cy - y * ry;

                // تخفيف النقاط قرب حافة الكرة لإظهار الانحناء
                const edgeFade = Math.min(1, z * 2.5);
                const alpha = (0.35 + (z * 0.45)) * edgeFade;

                ctx.beginPath();
                ctx.fillStyle = `rgba(124, 77, 255, ${alpha})`;
                ctx.arc(px, py, radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    wrapper.addEventListener("pointerdown", event => {
        if (event.pointerType === "mouse" && event.button !== 0) return;

        dragging = true;
        pointerId = event.pointerId;
        lastX = event.clientX;
        lastY = event.clientY;

        wrapper.classList.add("is-dragging");

        try {
            wrapper.setPointerCapture(event.pointerId);
        } catch (_) {}
    });

    wrapper.addEventListener("pointermove", event => {
        if (!dragging || event.pointerId !== pointerId) return;

        rotation += (event.clientX - lastX) * 0.45;
        tilt += (event.clientY - lastY) * 0.002;

        tilt = Math.max(-0.45, Math.min(0.45, tilt));

        lastX = event.clientX;
        lastY = event.clientY;

        draw();
    });

    function stopDragging(event) {
        if (pointerId !== null && event &&
            event.pointerId !== pointerId) return;

        dragging = false;
        pointerId = null;
        wrapper.classList.remove("is-dragging");
    }

    wrapper.addEventListener("pointerup", stopDragging);
    wrapper.addEventListener("pointercancel", stopDragging);
    wrapper.addEventListener("lostpointercapture", stopDragging);

    function animate(time) {
        requestAnimationFrame(animate);

        if (!previousTime) previousTime = time;
        const delta = Math.min(time - previousTime, 40);
        previousTime = time;

        if (!dragging && !reduceMotion.matches) {
            rotation -= delta * 0.012;
            draw();
        }
    }

    if ("ResizeObserver" in window) {
        new ResizeObserver(resize).observe(globeArc);
    } else {
        window.addEventListener("resize", resize);
    }

    resize();
    requestAnimationFrame(animate);
})();
