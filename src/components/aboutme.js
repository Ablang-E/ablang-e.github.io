import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div>
            <h1>
            CS 428 Project 1
            </h1>
            <p>
            Hello! Welcome to my CS 428 Project 1 page. This project is based off using augmented reality technology to show you widgets that display useful information.
            The project revovles around using a webcam. It uses the image targets from Vuphoria and when the webcam detects the image target, it will display the
            correct widget, based off of the image target it is detecting. This project contains a couple widgets such as a Time, Date, Temperature, Humidity,
            Wind Direction, Wind Speed, and Current Weather Conditions. The data that is shown is accurate to the location it is grabbing the data from (Open Weather Map).
            </p>
            <p>
            GitHub Link: https://github.com/Ablang-E/CS428_Project1
            </p>
            <p>
            YouTube Demonstration: https://youtu.be/1TdQRwDY634
            </p>
            <p>
            Discussion:

            I think that later down the road, if people were to have openly available AR glasses to use, some of these widgets could be very useful and some could not. For example, if there was a widget that is linked to your To-Do list on your phone, it would be useful to be able to see this list right in front of you instead of having to pull out your phone and sort through it manually. Widgets inside these AR glasses can definitely make life a lot easier by saving us time having to look for the things we are looking for and overall just more convenient. Life right now isn’t totally on the idea of augmented reality glasses but it is definitely starting to get to that point. If more widgets are created for these glasses and these glasses are affordable, i’m sure a lot more people would be willing to use these glasses.

            Some for-sure widgets that should be implemented is the To-Do list, grocery list widget, timer widget, or even a reminder widget would be super helpful to people today. The concept of making widgets to fill us in with useful information can transform society (if everyone were to have a pair of AR glasses) in a way that is more productive and alert. But some of these widgets can be useless and more of a clutter if anything. For example, the widgets that I had created for this project can definitely be improved to not only look better but to be pin point accurate. If someone were to have these AR glasses and have my widgets that I created inside of them, no one would want to buy these glasses or even use these widgets due to how unappealing they look or the information isn’t updated. But let’s say these widgets are redesigned in terms of code and looks, I can definitely see people using these types of widgets with the glasses in a work setting or an everyday setting. For example, if someone just woke up and wanted to be filled in with the information for the day, they can simply just put the glasses on and read what the temperature is today, how fast is the wind/what direction, time/date, and get what they have to do today. This can save a ton of time for people when they wake up and make their life just generally more convenient. In another setting, for example like a work setting, a coder can just be wearing these glasses at all times and have a little widget that lets them know what their boss wants done today, what you have to do today, and what they have left today. Something like this could be very helpful for a coder as their eyes don’t necessarily have to go through every message/email while they are working so this could actually help someone in this setting stay focused and get more work done efficiently. Overall, I would love to see all of these widgets be used in a real life setting (primarily a work setting) and see how these widgets can actually improve workflow and life quality.



            </p>
            <p>
            References:
            http://soundbible.com/636-Windy.html
            http://soundbible.com/634-Wind-Blowing.html
            http://soundbible.com/633-Snowing.html
            http://soundbible.com/2083-Crickets-Chirping-At-Night.html
            http://soundbible.com/1661-Sunny-Day.html
            http://soundbible.com/1508-Background-Noise.html
            http://soundbible.com/2006-Bird-In-Rain.html
            http://soundbible.com/901-Rain-And-Thunder-Strikes.html
            http://soundbible.com/2065-Rain-Inside-House.html
            Sun texture: https://www.solarsystemscope.com/textures/
            Compass texture: https://www.solarsystemscope.com/textures/
            </p>
            </div>
        )
    }
}

export default About;
