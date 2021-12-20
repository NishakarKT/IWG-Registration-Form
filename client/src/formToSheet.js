const formToSheet = e => {
    e.preventDefault();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwD-qPU8kK60_6M42tRf7LzK2674VXjZSp8ZsmOAE3dzGVY-13PPRwWf1Rv7X6X4SgG/exec",
        type: "post",
        data: e.target.serialize(),
        success: res => {
            console.log(res);
            window.location.reload();
        }
    });
};

// google sheet link: https://docs.google.com/spreadsheets/d/1HUxsuxO9Xaa7K8KWO6U-TPERLl5B7QRse1XeqEA267c/edit#gid=0