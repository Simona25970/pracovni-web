console.log("Načítání JS");

window.onload = () => {
    document.querySelectorAll(".resizable").forEach((element) => {
        element.onclick = () => {
            element.classList.toggle("bigger");
        };
    });
    const up = document.querySelector(".up");
    up.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
    const hideUp = () => {
        if (window.scrollY < 500) {
            up.classList.add("hidden");
        } else {
            up.classList.remove("hidden");

        }
    };
    hideUp();
    window.onscroll = () => {
        hideUp();
    };

    $(document).ready(() => {
        $(".more").each((i, more) => {
            $(more).click(() => {
                const show = $(more).attr("data-show");
                $(show).toggleClass("hidden");
                $(more).text(
                    $(show).hasClass("hidden") ? "Zobrazit více" : "Zobrazit méně"
                );
            });
        });
    });
};






