// $(document).ready(function() { ... });
// هذه وظيفة أساسية في jQuery. تضمن أن الكود الموجود بداخلها لن يتم تنفيذه
// إلا بعد أن يتم تحميل كامل صفحة الـ HTML، وهذا يمنع حدوث أخطاء.
$(document).ready(function() {

    // --- 1. تعريف بيانات فريق الإدارة ---
    // قمنا بإنشاء مصفوفة (Array) من الكائنات (Objects).
    // كل كائن يمثل عضواً في الفريق ويحتوي على بياناته.
    // هذا المبدأ يسمى "فصل البيانات عن العرض"، ويسهل تحديث البيانات لاحقاً.
    const founders = [
        { name: "المهندس محمد الشريف", role: "المدير العام", bio: "المؤسس والمسؤول عن الرؤية والاستراتيجية والتواصل مع الشركاء والداعمين والشؤون المالية.", img: "image/محمد.png" },
        { name: "المهندس شادي الشريف", role: "المشرف", bio: "مسؤول عن العمليات والمتابعة الميدانية والموارد البشرية وتشغيل البرامج والتنسيق.", img: "image/شادي.png" }
    ];

    // --- 2. عرض بطاقات الفريق بشكل ديناميكي ---
    // نستخدم حلقة .forEach() للمرور على كل عنصر (عضو فريق) في مصفوفة `founders`.
    // 'f' يمثل الكائن الحالي للعضو، و 'i' يمثل موقعه (index) في المصفوفة (0, 1, 2, ...).
    founders.forEach((f, i) => {
        
        // $('#team-container') -> نستخدم jQuery لاختيار الحاوية الفارغة التي لها id="team-container" في HTML.
        // .append(`...`) -> نقوم بإضافة (append) كود HTML التالي بداخل هذه الحاوية.
        // نستخدم (Template Literals) ` ` (الحاصرتان المائلتان) لكتابة HTML متعدد الأسطر ودمج متغيرات JavaScript بسهولة باستخدام ${...}.
        $('#team-container').append(`
            <!-- هذا هو عمود Bootstrap الذي يحتوي على بطاقة العضو -->
            <div class="col-md-5">
                <!-- هذه هي بطاقة العضو. أضفنا لها حدث onclick لاستدعاء دالة openF عند النقر -->
                <div class="card p-4 border-0 shadow-sm rounded-4" style="cursor:pointer" onclick="openF(${i})">
                    
                    <!-- عرض صورة العضو. مسار الصورة يأتي من الكائن الحالي: ${f.img} -->
                    <img src="${f.img}" class="rounded-circle mx-auto mb-3" width="130" height="130" style="border: 3px solid #0d6efd">
                    
                    <!-- عرض اسم العضو: ${f.name} -->
                    <h4 class="fw-bold">${f.name}</h4>
                    
                    <!-- عرض دور العضو: ${f.role} -->
                    <p class="text-primary fw-bold mb-0">${f.role}</p>
                    
                    <!-- نص إرشادي صغير -->
                    <small class="text-muted">انقر للمزيد</small>
                </div>
            </div>
        `);
    });

    // --- 3. تعريف دالة فتح النافذة المنبثقة (Modal) ---
    // window.openF -> نجعل الدالة متاحة على مستوى الصفحة كلها (window) حتى يمكن استدعاؤها من حدث onclick في HTML.
    // الدالة تستقبل 'i' وهو رقم (index) العضو الذي تم النقر على بطاقته.
    window.openF = (i) => {
        
        // باستخدام الـ index 'i'، نحصل على كائن العضو الصحيح من مصفوفة `founders`.
        const f = founders[i];
        
        // $('#modal-body-content') -> نختار حاوية المحتوى داخل الـ Modal.
        // .html(`...`) -> نقوم باستبدال محتواها بالكامل (overwrite) بكود HTML الجديد الذي يحتوي على تفاصيل العضو.
        $('#modal-body-content').html(`
            <!-- عرض اسم العضو في النافذة -->
            <h3 class="text-primary fw-bold">${f.name}</h3>
            
            <!-- عرض دور العضو -->
            <p class="fw-bold text-muted">${f.role}</p>
            
            <!-- خط فاصل -->
            <hr>
            
            <!-- عرض السيرة الذاتية للعضو: ${f.bio} -->
            <p class="lead">${f.bio}</p>
            
            <!-- زر لإغلاق النافذة المنبثقة (هذا جزء من وظائف Bootstrap) -->
            <button class="btn btn-primary px-4 mt-3" data-bs-dismiss="modal">إغلاق</button>
        `);
        
        // new bootstrap.Modal('#founderModal').show();
        // هذا هو السطر الذي يقوم فعلياً بإظهار النافذة المنبثقة (التي لها id="founderModal") للمستخدم.
        // نحن ننشئ نسخة جديدة من كائن Modal الخاص بـ Bootstrap ونستدعي دالة .show() الخاصة به.
        new bootstrap.Modal('#founderModal').show();
    };
});
