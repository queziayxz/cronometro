var $time = document.querySelector(".time");
const $btnStart = document.querySelector(".btn-start");
const $btnPause = document.querySelector(".btn-pause");
const $btnStop = document.querySelector(".btn-stop");



function stopWhatch()
{
    var seconds = 00;
    var minuts = 00;
    var milliseconds = 00;
    var interval;

    $btnStart.addEventListener("click", function() {
        $btnStart.disabled = true;
        clearInterval(interval);
        startTime();
    });

    function startTime()
    {
        interval = setInterval(function() {
            milliseconds++;
        
            $time.textContent = time(milliseconds);
        }, 1000);
    
        function time(milliseconds) {
            var data = new Date(milliseconds * 1000);
            return data.toLocaleTimeString('pt-br', { hour12: false,  timeZone: 'GMT' });
        }
        
    }

    $btnPause.addEventListener("click", function() {
        clearInterval(interval);
        $btnStart.disabled = false;
    });

    $btnStop.addEventListener("click", function() {
        clearInterval(interval);
        milliseconds = 0;
        $time.textContent = '00:00:00';
        $btnStart.disabled = false;
    });
}


stopWhatch();