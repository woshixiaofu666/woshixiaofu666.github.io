     window.onload = function () {
            countDown();
            function addZero(i) {
                return i < 10 ? "0" + i : i + "";
            }
            function countDown() {
                var nowtime = new Date();
                var endtime = new Date("2023/06/04,06:00:00");
                var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
                var d = parseInt(lefttime / (24 * 60 * 60))
                var h = parseInt(lefttime / (60 * 60) % 24);
                var m = parseInt(lefttime / 60 % 60);
                var s = parseInt(lefttime % 60);
                d = addZero(d)
                h = addZero(h);
                m = addZero(m);
                s = addZero(s);
                document.querySelector(".count").innerHTML = `距离高考还有  ${d}天 ${h} 时 ${m} 分 ${s} 秒`;
                if (lefttime <= 0) {
                    document.querySelector(".count").innerHTML = "高考了！";
                    return;
                }
                setTimeout(countDown, 1000);
            }
        }