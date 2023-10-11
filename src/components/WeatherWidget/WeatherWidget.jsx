import { useEffect } from "react";

const WeatherWidget = () => {
  useEffect(() => {
    if (!window.myWidgetParam) {
      window.myWidgetParam = [];
    }

    window.myWidgetParam.push({
      id: 1,
      cityid: '706483',
      appid: 'a323d6674456ccaaf9a7dc4a714c315f',
      units: 'metric',
      containerid: 'openweathermap-widget-1',
    });

    (function () {
      var script = document.createElement('script');
      script.async = true;
      script.charset = 'utf-8';
      script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(script, s);
    })();
  }, []);

  return <div id="openweathermap-widget-1"></div>;
};

export default WeatherWidget;
