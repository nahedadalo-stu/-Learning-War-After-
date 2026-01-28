$(document).ready(function() {
    const founders = [
        { name: "المهندس محمد الشريف", role: "المدير العام", bio: "المؤسس والمسؤول عن الرؤية والاستراتيجية والتواصل مع الشركاء والداعمين والشؤون المالية.", img: "image/محمد.png" },
        { name: "المهندس شادي الشريف", role: "المشرف", bio: "مسؤول عن العمليات والمتابعة الميدانية والموارد البشرية وتشغيل البرامج والتنسيق.", img: "image/شادي.png" }
    ];

    founders.forEach((f, i) => {
        $('#team-container').append(`
            <div class="col-md-5">
                <div class="card p-4 border-0 shadow-sm rounded-4" style="cursor:pointer" onclick="openF(${i})">
                    <img src="${f.img}" class="rounded-circle mx-auto mb-3" width="130" height="130" style="border: 3px solid #0d6efd">
                    <h4 class="fw-bold">${f.name}</h4>
                    <p class="text-primary fw-bold mb-0">${f.role}</p>
                    <small class="text-muted">انقر للمزيد</small>
                </div>
            </div>
        `);
    });

    window.openF = (i) => {
        const f = founders[i];
        $('#modal-body-content').html(`
            <h3 class="text-primary fw-bold">${f.name}</h3>
            <p class="fw-bold text-muted">${f.role}</p>
            <hr>
            <p class="lead">${f.bio}</p>
            <button class="btn btn-primary px-4 mt-3" data-bs-dismiss="modal">إغلاق</button>
        `)
        new bootstrap.Modal('#founderModal').show();
    };
});
