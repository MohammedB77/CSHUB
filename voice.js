
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