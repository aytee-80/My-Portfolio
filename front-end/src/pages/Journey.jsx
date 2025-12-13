// src/pages/Journey.jsx
import React, { useEffect } from "react";
import "../styles/Journey.css";
import "../App.css";
import Navbar from "../components/Navbar";

import tutCampus from "../assets/ICEP1.JPG";
import icepTeam from "../assets/team.jpeg";
import smartEventsApp from "../assets/project.png";
import frontendCert from "../assets/best 2.jpeg";
import bestInternAward from "../assets/best 2.jpeg";
import smartEventsVideo from "../assets/video.mp4";

export default function Journey() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-to-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <section className="journey-hero section-to-animate">
        <div className="container">
          <h1>My Journey at TUT & ICEP</h1>
          <p>From classroom to real-world impact , a story of growth, code, and collaboration.</p>
        </div>
      </section>

      {/* TUT Section — with icon & full-image class */}
      <section className="journey-section section-to-animate">
        <div className="container">
          <div className="journey-content">
            <div className="journey-text">
              <h2>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEhUSEhIVFhUVFhoYFRgVGBgXHRoaFhUWGBgYGBsYHiggHh0lGxoVITEiJSorLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS8tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANwA5QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUCAQj/xABQEAACAQMCAwUEBAkJAwsFAAABAgMABBEFIQYSMQcTQVFhInGBkRQycrIjMzVCUnOCobEVNDZikqKzwdEkdLQWF0NTVGODk8LS8CUmw9Ph/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAEDBAIFBgf/xAA8EQACAgEDAQYEAwYFAwUAAAAAAQIDEQQSMSEFMkFRYXETIjOBNJHBBhQjodHhQkNFcrEWovEkUlNigv/aAAwDAQACEQMRAD8AvGgFAKAUAoBQCgFAKAUAoBQCgKR7V+NZ3uHs4JGjii9mQoeUyPgEgkb8o6Y8TnOdq9DTUR27nyYdRc87UV3ZX0sDiSKR43HRkYqf3dfca1SipLDRlUnF5R+hOzTihtRteaTHfRNySY2DbAq4A6ZHh5g15d9Xw54XB6VNm+PUl1UlwoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKA8hxuPLr/GgPVAfnDtO0l7bUJiwPLMxljbwYPu2PUNkEe7zFerp5qVaXkeZqIOM8kUq8oLy7EdKkhtJJnBHfuCgPiiDAb4ktjzAB8a83VzTnheB6Olg1HqWPmsppCtmgPtAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgMEM/OzY+qp5c+bDqB7unvyPChGTPQkUAoCnOPNYns9VkkgkKHkjyOoYBejKdiP8A4MVmsk4z6H1/Zelq1GhUbFnq/dEq4V7R4LnEdxiGU7ZJ9hj/AFWP1T6N8zVkLU+Ty9d2LbRmVfzR/mvsSjWdGtr2Pu7iJZF6jPUHzVhup9QavhOUXmLPClBS6NEfsezHS4nD9wXIOQJHd1+Kk4PxzVr1NjWMlaogvAkuo6jDaxmSZ1jRfE7e4KPE+grO2l1ZqppsulsrWWVXxV2lyzZjtAYk6GQ/Xb7Pgg/f7qzyub4PqdD2DGHzX9X5eC9/MmPZWxOnoSSSZJSSdyT3jZJPnVlLzA8jttJaxpeS/wCCX1aeSKA+GgNeyuu85h0ZG5XHkQAfkVKsPRhUtEJ5NmoJFAKAUAoBQCgFAKAUAoBQCgOVxLqRt4cpgyyMsUIO+ZJTyqSPELux9FNdQjlnE5YXQ3rK2EUaxrkhQBk7k+ZJ8STkk+ZrlvLydJYWDPQkGgIhNr00M0i5DKHbAbwGT0I3r5Ofa99F848pN9Ge5DQVW1RfDwjV1Wy03UjzToYpcY7xTg+m/wBU/tCvSp7W0t/f+V+v9SanrdF9J5j5f25/IimsdmNwg57aRZ08AcI2PTflPzHurf8ACysxeUenp+36m8XRcX+a/qv5nvgTWr61uorGYOEcleSZTlQFJzGTvjYbbjyrquUlJRZx2npdLdRLUVNZXivH3RZvEuoNbWs06AFo0LKGzjPhnGKvk9sWz5rSUq6+FcuGymk0vU9XkErK7g9Hk9iNQf0M7Y+yDWbE5n2L1Gi7PjsTXsurfv8A3JAvA1jYqJNSvF8+RTyA+g/Pf9kCrq9K5PzPG1f7RyxipKPq+r/L/wAmC+7VLa1j7jTbX2VzytJlV38Qg9psnzINehVosLr0PmNR2hKyblJ5fmyQdkvEVzfrcyXMnMVdAoAChQVJwoH+eT61xqa4waSFFjmm2WBWcvFAR3XLj6JcwXHSOZhbT+QLkmCQ+5yU/wDG9KsgtyaK5PDTJEKrLBQCgFAKAUAoBQCgFAKAUAoCF3U/0rWooRuljC0zeXezAIgI8xGxI+1VyW2pvzKs5sx5E0qktPAlXPLkcwGSM74PQ48tj8qA9GgK81T8dJ9tv4mvz/XfibPdn1Wl+jH2NaspeZ7W8kiOUcr7unxHStFOqtpf8OTRVbRXZ31k7+l633zpHLGpbPssPAgHfB6H1FfQ6DtiV1karI9X4o8nVaBVQc4SePI6vEN+ltbSzunOsaFiu2+N8b7V9HGO57fM8hy2rcikte7VL+4ysJW3Tyj9p/cXYfdC16ENLCPPU8+eqk+OhB55mkYu7MzHqzEsT7ydzWlJJYRnbb5PFSQXL2C/ibr9Yn3TXn6zvI36TustTNYzWFYHcHIqE0+A+hx+MdN+lWVxCPrNE3J6Oo5kPwYLVlctskziazFnjgnWPptjBcE5ZkAf7a+y/wDeBPxqbYbZtCuW6KZ3KrOxQCgFAKAUAoBQCgFAKAUBXHZbP9Ju9Tuyc95Mqr9lDJy/3SnyrTqFtjGJmpeZSkWPWY0lF9tUzR6lG6MysLZMMpKkfhZuhG4r0NIk63nzMGpbU+hz9E7UdRt8B3WdB4Sj2sejrg/Fuau5aWEuOhxHUyXPUmWn9oml3e1zE1vIerfWXP20GfiyivI1XYlVvVxz6roz0qO1Jw6Js76aJHOveWtwkqeGGB/vLkfwr53U/s/OP05fZ/1PYp7WjLvr7o5t1YSxfXRgPPqPmNq8S/RX0d+LXr4fmenXqarO7Iz8P/ziP3n7pq/sr8XD3/Qq130JHc7Qfybd/qWr76j6i9z5W3uM/NKIWIVQSTsABkn3Ada9fg8pLPBLdE7NtSucEw9yh/OnPJ/c3fPvAqieprj6l0dPN+hM7Dsz0+23vLhpm8UT2F+Skv8AHmFeVqu2qqejkl6cs9CjsydnCb/4JFbanBaoY7K2SJT1OAMnzIHU+pJr5zVftDKT/hx+7/oe1R2Ql339kaN5qMsv13JHl0HyG1eHfrr7u/J+3h+R6dWlqr7sSbaJ+Ii+wP4V9p2f+Fr9kfOar60vdm6a2FBXfY/PyC+tM/ze6bA8lYsmPnGT8a06ld2XmjPQ8Zj6li1mNAoBQCgFAKAUAoBQCgFAa2pTd3FI/wCijN/ZUmpSyyJcFc9gi/7JOf8Av8fKJP8AWtWs7y9jPpu6yz6yGkojty/KCf7sn+LNXo6P6f3PP1ffK8rWZRQGeyvJYG54ZHjf9JGKn5qahxT5R0pyXDJxovaxfw7ThLhfHmHI/wDaUY+amstmkhLg0Q1UlyWLwhxFZ6iwkjtpo3XJ5jGeTON/wiex88GvIt7LprsVmFleXT+R6VeusnBwy8MlWq2MdxDJDKCY3Uq4BIJHiAV3+VXKbi9y8DhxUuhF7e4tLHKWlosZ8SV5SftE+23xNeHrO3nF7YxefXoenp+ysrLax6df5mpd6xPL9ZyB5L7I/dufjXgX9p6m7mWF5LoerVoqa+F19epoVgNWD7QkVAJ/on4iL7A/hX3/AGf+Fr9kfKar60vdm6a1soKo7N58a1qcY/OeZv7F0R/+Q1t1C/hRft/wZKX/ABJItisZrFAKAUAoBQCgFAKAUAoDn8QDNrcD/uZP8Nq6jyjmXBW3YHdZS6i8mjf+2rL/AOgfOtetXzJmbSvo0WzWI1lEduX5QT/dk/xZq9HR9z7nn6vvleVrMptadp01w3JBE8jeSKWx78dB6muZTUeWdRhKXCJ3onZFeS4a5kS3XqR+Mf4gHlH9o+6s09XFd3qaYaST5Jdw7wzocE6QIVubg5OZD3oHKMnIUd2Onlmsc9XKbxk9NdmWV1fFlDC836m7xdx0dOnFutsrju1YHn5MZLDAAQ/o1kstcXjB63Z3Y61dXxN+OuOP7o4v/O43/Yx/5x//AF1x8d+Rv/6bX/yf9v8Acl9vrsE1gt7cxhIyMsN5OX8JyDBAz1x0FdTrrthmyKZ489LbTqnRS8vPtnpk14dLtLpee0nUjyVucD0I+sPjXj3dh02dapY/mv6mj991FD23w/lj+xz7zRJ4uqcw803/AP7Xi39l6inmOV5rqbKtdTZ44fqc6vONh9qCSf6J+Ii+wP4V9/2f+Fr9kfKar60vdm9WwoKW7KJ+91m7kHR0uH/t3MZ/zrfqOlMUYqHm1l01gNooBQCgFAKAUAoBQCgFAY7iIOrKejAg/EYouSHwUR2NXxt9RMD7d6jRkf14/aH7lcfGvR1S3VqXkYNO8TaL7rzj0Cs+0HgK61O+SSNo0iECozuSTkPKSFUbnZl64G/WtdN8a4Y8TLdQ5yybmhdk1jBhpi9ww/TPKmfRF6+5ia5nqpy46HUNNCPPUy8b8RnSFihtIIlEisRthV5So2RcZ6+fhWK21o9/sjsyvVbnNtKPgirtX4iu7vPfzuwP5oPKv9lcD51lc3Lln1un0On0/wBOK9+X+f8AQ7HZZ+UYvsyfcNdU94x9ufg5e6Nnte/n4/UJ96Spu7xX+z/4V/7n+hCqqPbLTk/o3+wP+JFaf8o+T/1n7/oVfBM0bBkZlYdGUlSPcRvWbg+qnCM1iSTXqS3SO0m+g2kKzqPCTZvg6/5g1arpI8fUdhaazrDMX6cfkXFcabDMMugyR1Gx+YpfoaL+/FZ8z5GGotqeIy/ocS84VPWJ/g/+o/0rxdR2B40y+zPRq7V8LI/kd7TIWSJFYYKqAfeK9zR1yrohCXKSPMvkp2SkvFs1OK9S+i2dxP4pExX7RGEHxYqK2Vx3SSM85bYtlW9glrma5kx9WNEz9tiT9wVs1j+VIy6VdWy6KwG0UAoBQCgFAKAUAoBQCgFAfnDjWF9P1aV49iswnj8jzkSfLmLL8DXqU4nUkzzLVssyfoLRtSS6gjnjPsyIGHpnqD6g5B91ebKLi8M9GMsrKN2uToUBVHbX+MtfsSfxjrNfyj6n9nO7Z9v1K2qg+mJZ2WflKL7Mn3DVlPePI7c/By90bPa9/Px+oT70lTd3iv8AZ/8ACv8A3P8AQhVVHtlpyf0b/YH/ABIrT/lHyf8ArP3/AEKsrMfWHl+h91QyT9PwfVX3D+Fegj8xlyz3UnIoCq+3PXOWKKzU+1Ie8kH9RDhAfe+//h1s0cOrl5GTVTwtp0uxPTTFYNKRvPKzD7KYQfvDn41xq5ZnjyO9NHEMlhVmNAoBQCgFAKAUAoBQCgFAKAqft00PKQ3qj6n4KX7LHMZPoG5h+2K26OfMDJqoZW40uxTijkZrCU7OS8GfBurp8frD1DedTq68/Ovuc6az/Cy5awm0UBVHbX+MtfsSfxjrNfyj6n9nO7Z9v1K2qg+mJZ2WflKL7Mn3DVlPePI7c/By90bPa9/Px+oT70lTd3iv9n/wr/3P9CFVUe2WnJ/Rv9gf8SK0/wCUfJ/6z9/0KsrMfWHl+h91QyT9PwfVX3D+Fegj8xlyz3UnJralfR28TzStypGpZj6Dy8z6VMU5PCIk0lln5p1a+m1W+Lge3PIEjX9EEhUX3AYyfea9aKVUPY8uTdkz9J6Pp620EUCfViRUHrygDJ9T1+NeTJ7m2epFYWDcqCRQCgFAKAUAoBQCgFAKAUBp6vp0d1DJBKMpIpVvj4j1BwR6ipjJxaaOZLKwz8yavp02n3LRMSssLgqw26HmSRffsRXsRkrI58zy5Rdci++z7jFNSh9rC3EYAlQbZ8A6j9E/uO3kT5l1TrfoehVbvXqSyqS4g3aVwpcX/dPAUJiDAox5S3Nyn2T0zt4469aptg5cHtdj9oVaVyjZnEsdfYqLUdNmtm5J4njbyYEZ9x6H4E1mcWuT6+nUVXrdXJP25JF2WflKL7Mn3DXdPePO7c/By90bPa9/Px+oT70lTd3iv9n/AMK/9z/QhVVHtlpyf0b/AGB/xIrT/lHyf+s/f9CrKzH1hJdE4EvrvBEfdIfz5srt6LjmPyx61YqpSPL1PbGmo6Z3PyX9S+Y1wAPIVsPhW8vJ9JxQgontV43F6/0W3bNvG2WYdJXHl5ovh5nfwBr0dPTtW6XJ5+ou3PC4On2J8MFna/kHsrlIM+LdHce4ZUH1byrjV2/4Ed6Wv/EXJWE2igFAKAUAoBQCgFAKAUAoBQCgIL2ocGfyhF30I/2mIez4d4nUxk+fUr6kjxyNGnu2PD4M99W9ZXJRmmahNZzLLExjljJ8MY8GVgfDwINejKMZxwzBGUoPJfnAnHsGoqEbEdwB7UZOzY6tET1Hp1H7z5t1DrfoejVcpr1JjVBcYLu0jmUpKiup6q4DD5GoaT5OoTlCW6Dw/Qj2n8EWttdLdQcyFQwKZ5kPMpG2dx188elcKuKeUehb2rfdQ6bOq6dfHocbjngW4v7nvo5IlXu1TD82cqWPgD51zZU5PKNvZna1elp+HKLfXPQj/wDzUXn/AF8H9/8A9tV/Akeh/wBRUf8Asl/InNrwqTpq2Er42wzR79Je825h8NxV6h8m1ng26/8A9Y9TBeOUn7G3ofCNnZ4MUILj/pH9t/menwxUxhGPBXqe0dRqO/Lp5cI7ldGIx3VykSM8jKiKMszEAADqST0FEsvCIbKS7Re0c3Ya2tCVgO0km4aX+qPFY/3t6DY+hRptvzS5MN9+75YkY4J4Vk1OcRrlY1wZpP0V8h/WO4A956CrrrVXH1KqqnNn6RsLNII0ijUKiKFVR4ADArym23lnppYWEbFQSKAUAoBQCgFAKAUAoBQCgFAKAUBW/aT2dC85rm1AFxjLpsBLjx8g/r0Pj51qo1GzpLgzX0b+q5KSdJInwQ0ciHcHKMrD5EEV6PRo8/rFlj8KdrU8IEd4pmQdJFwJB9oHCv8AuPqayWaRPrE1V6prpItXQ+KrK9H+zzozfoE8rj3o2G+OMVinXKHKNkbIy4Z2a4OxQCgFAY5plQFnYKo6liAB7yaDJB+I+1SxtgVgP0mTw7s+x8ZOhH2eatFemnLnoiieojEqDiji+71Fvwz4QHKxJkIPIkZ9o+pz6YrdXTGvgw2XSnyfeEOErjUpOWMcsan8JKR7K+g/SbHRfngb0tujWhXU5s/Q3DugwWEKwQLhRuSfrOx6u58WP+gGAK8uc3N5Z6UIKCwjqVydigFAKAUAoBQCgFAKAUAoBQCgFAKAUBF+MeB7XUhlxyTAYWVAObboGH5y+h+BFW13Sr44KrKlMpXifgO+sCS8feRDpLECy483HVPjt6mvQrvhP3ME6JwIuD4j4VeU8He03jPUbfaO7lx5Oe8HuAkzge6qpUVy5Rar5rxO9B2tamvUwP6tGf8A0sKq/dKyxaqZlbtg1I/mWw90cn+clP3Ov1J/e5eRz7ztO1WTpOI/1caD97An99dLS1rwOHqZsjOoanPcHM80kpzn8I7Pj3BjgfCrlCMeEVSnKXLMVrbSSuI40Z3PRUBYn3Ab0ckurIUW+CzOEeySSQiS/Pdp17lCOc+jsNlHouT6islur8IGuvS+Mi37CxigRYoUVEUYVVAAH/zzrC228s2pJLobNQSKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAfMUBGNd4A068JZ4Ajn8+L8G2fM49kn3g1bC+yPDKpUwlyiF6j2LDrBdn3SoD/eQj7taI6zzRRLSLwZwpeyDUl6Nbt7pHH3kFWrVw9St6SRhXsl1M+EI98n+i0/e6/Uj91kb9n2NXrH8LPAg/q88h+RVR++uXrI+COlpH4sk2ldjtnHgzyyzHyGI1PwXLf3qplq5vjoWx0sVyTvSdGtrReS3hjjHjyKAT9o9SfU1mlOUuWaFFR4N+oOhQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAcP/lhpv/b7X/z4/wD3V38KfkzjfHzMttxTYSsqR3lu7scKqyxkknwAByTR1zXVonfF8M62a4OjStdYt5ZZII5VaWLHeKNyuTgZ8M+lS4tLLIUk3g3qgkUAoBQCgFAKAUAoDFdXKRI0kjKiKMszEKFA6kk7AVKTbwgebO7jmQSROro31WQhlO+NiNjvmjTXRkJpmKx1SCdnWGaORozyyBHVihyRhgDschuvkaOLXIUkzcqCTxPMqKXdgqqCWYnAAAySSegAoMmKwvorhBLDIsiN9VkIYHBwcEeoIqWmnhkJp9UbFQSKAUAoBQCgNPTtUguQzQSpIFYqxRgwDDqDjx6fOpcXHlEJp8G5UEigFAVZ2ocJWNrp7ywW6RyB4wGHNnBcA9T5Vs01s5WJNmW+uChlIz3tnpulWNvf/Q1aYLEUwWBMjJzZJyQBsx6GuIuyybjnoS1CEVLBJOGdY1GeQLdWKwxtHzrIsqvvlcIVGTkg58OhquyEEvllkshKT5RBdN1O7g1bURaWn0iR3GQXCKgUk5YnbfOAMjxrQ4xdUdzwUKUlZLasku4Y40lvPpMD23dXlupPdM3sud8b4yN+UdDswIJqmypRw08pl0LXLKx1R70LjpLjTpb+RAhh5w8YbPtLuigkDdgU8OrYqJUtWKC8RG3MN3ke/wDlxH/JX8pcozyfi+b/AKXm5O7zjOOfxx03xT4L+JsJ+Ktm4y3Ot6gbS3mgsVkmmALx96FEYZSwJLYztgHpuahQhuabJcpbcpGtwxxjNNdNY3lr9HuAnOoDB1Zds4I+exI2PTFdWVJR3ReUcwsblta6mg3Hd7LcXFraaf30kErKW70KoQEgMxbGGJBwufA+VdfBioqUpYyc/Gk20lwdfgri835milhMFxbkCVCeYbkjIOPMHI925zVdtWzDTymd12bujXU5cvHd1czSR6ZY/SUhPK8rSKik+SZwD0659cYwT38GMUnOWDn4rbxFZO1wbxWuoLIpjaGeBuWaJjkqdwCDtkZDDoNwfjXZXsfOUd12bzJ2gfk27/UP92lP1F7i3uM1ey/8l2v2W/xHqdR9RkU9xEX7NJ+7m1mQDPJMzY8+V7k4/dV2oWVAqp6ORnsu0HUbqD6RbaXzxoD3jGUYyuciMYDNgY3AO+RjaolRCLw5Eq6TWVE6d5xaLvSXu4bUTKQy3ELuF5UVW73LeIC7jAyQRtmuPhbbNrePU7+JuhuwcrT+K/oOkW11b2SiEyOkkYlY8g711D8zAliWHj4sK7dW+1xb6nKsUa1JIknGHGC2VvFNEgme4ZVhQNy84cc2QQDtjHh1YVVVVvk0/A7nZtSfmeOKOMGsu5hWDvrycDlhRtgfElsfVznG2+D0AJqa6t+XwkJ2bcLxNHT+N7mO5ittRs/oxnOIXVw6lsgBTjONyB16kbYOa6dKcXKDzg5VrTxJYMOqce3SX81hb2ImkQDkIk5c5RHLPkYVQGI69cedTGiOxTk8ESuantSye9X43u7WK2SWzX6ZdOypCJByrhwi8zdMksu3TfrtURpjJvD6ImVrilldWdaw1bUmgnabT1WaMDukEykTEjcBui/E1w4wysSO1KTXVER4X1X/AOlX0tjYrE6yMCiTMesac8od8Y5FJIUfo7dausj/ABIqUsoqg/kbijP2R6nfNBFGbbmti0pN00qklizndCeY+17OfjTUxgpPr18hRKTjwSbg3ipr17mGaIRTW0nIyhiwK7gMCQPzlb4Y86ptr2JNcMthZuyvI19B4snvprpYIE7q3l7tZGc/hCCwJAA26A9ejCpnUoJZfJyrXJvCNbtl/Jcn6yL/ABBXWl+ovuRf3GbWptZDSoRf47hooFP1s8zKgUry+1kHfI6AGuI7/ifJydPbs+YiHB2oG21SKysrx7uzdCWDe13WFc7NjAwQnTAPPjGcGtFsd1W6Swymt4s2xeUdbgX8s6r71+81cW/Sgd1/UkOG/wCkWofqV+7bUs+hEQ+syO6rw/N/KsumpkW15Kl0+M7Rpzs+PL2+Ye8R1ZGcfh7/ABXQrcHvcfBnzU+HZV1FdJUYs5rgXagZwECN3i+QAwy4+x50jYvh/EfOMEOD37FxydvtMvj9OtLW4ne3sXQtI0ZK8zDnHKSB0GIx5Dnz5Yroj8jkllll0vmSfRHE4a+gxa7Atk5MPduvMzMwaTu5CwVm6j6o9+asnu+A93mcR2q1bSR9nH5U1j9cv+JPVd/04FlPekfOE1zrWqjPVVHz5aWfSiIL+JIhPCdrbQGa2vr+8spo5DlYpGjRhgDm2U+1t1PUcuM1fZKTw4pMz1pLKk8Fk9nGkWS97d2lzNcd8eR3mOTmNjnqobJznJ8CKy3Tk8RksYNVMIrqmd7jGzeexuYoxl3hcKPM8pwPidqrreJps7sWYsgnAPH9ha2CQXEjRyw86lCjkn22Ixgdd8EHGCDWi6icptxXRlFV0Yxw+UeezaF3t9TuyhVLlpGj5vEASsSPMe2BnzBpe1ujHyFK6Sl5nX7H/wAkr9qX7xrjU/V/I7p+mR7s+P8A9v3/ANm5/wCFSrLvrx+xXV9J/ckHZ5pqXehJA/1ZVnUnyzPLhh6g4I91V3ycbtyO6o5qwyMdnml3F1expdD2NKVo1GNu8MjcnXrgDIPlGnnV18oxh8v+IrqjJy+bwM/afaCLVLe5nknit3jEZmgJDxsveZAIBx9YHHUgtjpUad5rcVyLliab4M+l6NpV3dQxpqt5cyRnvkWSQuv4NlJGXTYnbYb4BqJTsjF5ikjqMISl3sm7w7/SS/8A93H8LSuZ/Qj7kw+sztdokelyLFFqEndli3cOCQykAcxBAIA3X6wxnHjiq6XNNuBZaoPpI4vZbq073N1a/SGuraEAxTtknJIAXmO5yM9f0NtjVmoglFSxhsrpk8uOco1OyyMvpmoKoyzSzKB5kwKAKnUd+Ip7rNnsh4ktFtIbNpQJzJIBGQ2TlmcY2xjlz8qaqEt7kuBROO3b4mj2jzSaVf8A0+AbXUEkT+kgUBWPyib9hvOpoSshsfgzm5uEty8SZdmui/Q9PhQjDyDvZM9eaQA4PqF5V/Zqi+e+bZdVHbFEkubZJV5ZEV18mAYbehqpNrgsaT5PklrGyd2yKUxjlIBXA6DB2xRNoYyYrHTIIMiGGOPPXu0VM+/lAzUtt8sKKXCMkVnGjM6xorN9ZgoBb7RG5+NRljCCWcauZBGgdtmcKAxG2xbGT0HyFMvgYXJ6NunP3nKvOFKhsDm5SQSueuMgHHpT0GOuQ1uhcSFV51BVWwOYBiCwB6gEhcj0HlU5eMDCzkx3tjFOvLNGki9eWRVcfJhiibXAaT5PC6VbjuyIYh3We6wi+xnrybezn0pufmNq8jLBaRozMkaKz7uVUAsd92IGT1PXzqMthJIR2kaszqiB2+swUAt7yNzTLYwkYb7SbecgzQRSEdDIivj3cwNSpSXDIcU+UbMEKooVFCqOgUAAe4CofXqdJYMlAc650K0lfnktoHf9J40ZvmRmulOS4Zy4RfKN4xjHLgcuMYxtjGMY8q5JweLe1SNeSNFRf0VUKN+uw2pnxYx4I8RWESIY1iRUbPMqqoU5GDkAYORtTL5GFwZLe3SNQiKqqOiqAoGTk4A260znkJYEVuiFmVVUueZyAAWOAuWI6nAAyfACjbGBcQJIpV1VlPVWAYH3g7Uy1wGsmCx0q3gz3MEUeevdoqZ9/KBUuTfLCilwjKlnGrmQRoHYYZwoDEbbFup6D5Coy+Bhcnm9sYp15ZokkXriRVcfJhUptcMNJ8nq0s44V5Io0Rf0UUKPkoxUNt8hJLgWtnHECI40QE5IRQoJ8zjxo23yEkuDAmj2yyd8LeIS5z3gjQPk9TzYzU7pYxkbVnOCH67w7f6ndKlyIEsoJu8QLkyShdgG3IAIJB6deh8L4WQrj8ucsplCU5deCfVnLxQCgFAKAUAoCFa1xxKl09pZWT3ckQBmw4QLkA4BIOTuP4b4OL40rbuk8ZKZWvO2KyTFWPKCRg4yQDnfG4z41QXFeXPam0S88mmXca7ZZ1KAZ6DLKBWpabPEkZ3qMcpm9o/aBJcyxR/ybdosjAd4ynkAb84nlxj1rmVCis7kdRu3Phk5rOXHzNADQEa4b4q+mXd5bd1yC1YLzc3MXJaRScYHKPY8z1q2dW2Kl5lcLNza8iTVUWCgFAKA5HFetfQbWW55Ofuwvs55c8zqvXBx18q7rhvlg4sntjk2NBvzc20M5XlMsSSFQc451DYztnGetROO2TRMZZWTfrk6FAKAUAoBQCgFAKAUAoBQCgK21S9u9T1SWwhuXtoLZMyNFs7sQv53UbtgeHsk75GNUYxrrU2stmeTlOe1PCRj0m7u7PUW0ma6kmjngLQSvvIh5HOc9Tjkk6n81SMZIpNRlX8RLGCIuUZ7GzlcA6LMdTvR9MmBt5kMh/6/DybSb/1T/aNd3TXw49OTiqD3vqXCKxGwg/bL+S5P1kf+IK0aX6iKNR3D3r3ELado8MyAGQxQpHnoGaMbnzwAxx44qK699mCZ2bIZIHNqrRwfSU193uwocw7mMnqYwp9nPhnGDjoM7aVDL27OhQ5PG7d1JHrXG11PbafHa4juL7ZnxkJysI25c+bZOd8BT44NVQpjGUnLhFk7ZNRUeWd/Q+Ebq2nSVtUuJlGe9jk9pXJU45eZjygHfbf1qqdsZLG3B3GuUXnJCtB0We81PU0iu5bZVmJkMWzPmSXkHNkEAYb35rROajXHKyUwg5Tl1wSPs61K6W6u9PuZjP8AR+UxyN9bB6gk7nIKncnBzuaqvjHapxWMllMpZcW+Di8NWl9qkl4jalcRRwXDqojPtElmx7eQeQBR7PqeldzcK0vlzlHEFKbfU6HBvFVxDBqUd05mbTy2HPVwDKoUn7UfU7+16VzbVFuLXTJ1XY0pJ+BraLo+p6ha/T21KaOWTnaGOM8sYCkhQyg4wceuARnNTOdcJbFHoRGM5x3ZMd1xHJqHDtxJLvKjLHIQMcxWWFg2BsCVZc+ua6VahekuDlzcqXk2dX4hntdK02C2IWe6jhjRz+aO7QEjO2csg9Mk1zGClZJy4R1KbUIpcswcS2moaLHHeJqE1yA6rPHMSVbmz9XJPKMjG24yDnapg4Wvbtx5CalWt2cm7xZq1xdaha6fDcNbRTQiVpEOHbmEhCqeo2TAwepPXAFc1QjGDm1nBNknKaing5+i21wmryWL31xKq2rhH7w8yc6oQX3PtLnY9c8p9K6ntdSnjHU5ipKxxydTgfiqSK0vEvXLz2DPzljlmX2uXc9fbDKPTlri2rMlt4Z3XPEXnwOr2W/SZLMXF1K8jzuzrzknlTooUeAOGb3MPKuL9qniK4Oqc7csmNUlwoBQCgFAKAUAoCutX0e+sdSk1CygFylwgWaLnCMCAoyCfDKqc79WGOhrTGcJ17JPGDPKMoz3R8T3w3od7c6idTvohByJyQRcwdhkMuSR4YaTruS3QY3ic4xr+HB5EIyc90ja4K0a4g1DUppYisc0imJiVPMA8pJABJGxHXHWotnF1xSOq4tTbJxVBcRLtQ0ue7sHht4zJIXjIUFRsHBO7EDp61dp5KM8squi5RwjHxFwu97pUdrskyRxFeboHjQAqxHmOZcjOM53pXYoWbvAThuht8SP2U2qIiwtocDSLhTKWhCtjbmIA8R5H4eFWNV87ytb102nX494Wnl+jXNiqCe0bKR7KrAkNgdBkEdMgEMdxXNNiWYy4Z1bW3hx5RsaLr2rTTxpNpogi3712lVvzTjkAx+djz2zXMoVpdJExnNvqjBwPotzBqGpTSxFI55AYmJU8w7yU5ABJGzL1x1rq6cZQil4CuDUm2feGtGuItXv7h4isMqqI3JXDY5M4AOR0PUConNOqKTEYtWNjs20a4tXvjPEUEtwXjyVPMuX3HKTjqOtL5xltx5CqLjnJocN8KTmXWEuI2jivHIifKnKs9x7QAJOwdDvjrXU7ViDjyjmFbTlnxNPS21ywtjYJYrKV5lhuFlQKFYkglT1wScZ5fDbz6l8Kct+77HMfiRjtwba8EzW+hzWaAPcSYkYKdiweM8qlvJEA8MkeGaj46lcpeBPwmq3HxMep8LXd1pljyR91d2XLyI5X2uQBeoJAJ5EYZPhg4zkI2RjZLPDEq5OCxyjDrttq+srHay2QtIg4aaQyK+eXI9kDfxJA33AyR4zB11fMnliSss6NYM3abw/cXEtosNsJoolOVSSOKXbAADvuF+qdgd85xsajT2KKeXj+Yug21hGpwFKun3y2k2ntbz3KkrI04nYgczcpI2API3TxAyOhrq754blLKXpgiv5JYa5NDtO0KQ6nFHAxX+UVVJQPExyJzMR5ALG37DeZrqia+G2/A5ug96x4lwWdssSJGgwiKFUeQUAAfIViby8mtLCwZqgkUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAjPFXBcGoOkryTRyxjCPE/KQCc7A5APqACdt9hVtdrh0wiudal1MXDnAltZS/SOeWefBAknfmKgjB5cADptk5OCfM1M75SWOF6EQqjF58T1w/wADW1pMbkvLNOcgSTPzFQeoUbAeIycnBPmaid0pLbwiY1JPPiSmqiwUAoBQCgFAKAUAoBQGmdRQTi3OecxmQbbcqsFO/nkjb1qM9cFnwpfDdnhnH3NaTiCAQPcZJRHMfsjJLrJ3fKo8SW2Hnmo3rGS1aS34irx1az9sZ6/Y6Yb0rozH2gGaAZoBmhGRmhIzQDNAM0AzQDNAM0IyM0JGaAFqA1NJ1FbmFJkDBZBlQ2M4ycHbz6/GoTysll1Tqm4S5Rt5qSs+0AoBQCgFAKAUAoBQHw0BEOM1mFxamD8ZKs1uG/Q7wRt3n7Ko7Y8cCqp53LHsepoXX8Kz4nC2y98ZWPvlGhw/pJF29oFItrOYTLnozyQx90vry/hGPqVqIr5seRdqr06I3N/PNbX6JN5/PovzNbQbea95JZHiWVpedn75zKgjkyYFh5QqAAch3OxJIJNRH5izUzr0+YxTccYS2rDyu9nq35kl46u5IrYd2/Jzyxxs5YoFV3AY84BK5+rzY25s1ZY+nQ8/s+EZXfMs4TeOctLp08fYj95YtFbzupjTvu6t1jgleUB3mVTIzsBl8OPAbDcnNcNdGba7VK6Cab25lmSS4WcYXh0NqbSrZbm6BDdzDao0imSQhnYynmfLbsETqf0s1OFufsVq+34NbWN0pvHRcLHTjzZq6WsTtbJeS+zFp6PIHkKgtKw+v7Q5uUIevmPSoiuE/Isu3xU3THvWNLCzx5dPHJ80hw5t4J5GW2YXM0YkdlMiCYCBHZjkqI25uUnoRnpURzlJ+p1etu+ytfOtieEujx8zWOnKx0PKXDwRx3MKvJEt7KtugYnmiliaNApb80zAEehHhRvCUl5hwhZJ1TwpbE5P/wCyeX99vR+ptaVFdPMbKdi4hl+kzONg4dQ8cQ3zy993npiIDxqY5ztZXe6I1/HrWNy2peTXRv8ALH3foanDtvLed1M8kQlaTvXkE8jSgI+WgWLAEagewRkjHUEmoj83Us1U66N0Ip4xhLCx1Xe3cvzR3uFLFJu8u35mZ7mZouZmwqq7RLyrnAyq5+PuqyCz1Zi1lsobaY9Eoxz6vGerPvEZjkvLWGV+VAk0r+2YwcBECkgjI9pjj+rSWHJIaVSjRZOKy8xS6Z83+hG5rhxH3cL4tZ71liLyvGrRrDkosoBZUeVXAI6422NVZf2yb4wi5bpr54wy8JPru5a4bUWsm49s0CxqZUjhu7lUcQSMUjRI3yiyHBDSOgUkBeuOu9ddenqVKasbaTcoRbWUst55a8kvf8uhr6gY1+kpA5W3kmtIQVchRKZszFGzthOXOPEeeaPPXHHQ7qUnslYszSm+OuMfLle/n4GzqEqQPePaMTHHZP3uHZ178n8HuSfbC8xO+cEZpJ4ba8jiqMrI1xuXzOax0w9vj9s4wfdVRkeztFMRhS25gskzQpKycibuqtzco9rl6HmyelH0wvDBFLUo2XPO5y5Sy0nl8PjPGST8MWDQQBWcNlmccpJVVduZUQsclVBwD/DpVsVhHnau1WWtpenq8eL9X4nXqTOKAUAoBQCgFAKAUAoDyUBIOBkdPT3UGQEAyQBv19dsb/DFBkxJZxq5kEaBz1YKAx95xk1GDpzk1tbeDLJGrAhgCDsQRkH3g1JCbTyjFHZxKoVY0Cg5ACgAEbggAYBpglzk3ls9mBDzZVfbGG2HtDGMN57bb0I3Pp14OBp1jFJd3hkjR+V4VTmVTyhYVI5cjbdm+dcJJtmy2ycaa1Ftc/8AJ3bi0jkAEiK4ByAyht/PeusIyRnKPWLwZDGNtht026Y6YqSMgIMk4GT1Pu6f50I9DFHZxKxdY0Dt9ZgoBPvIGTQ6c5NYbeDJHGqjCgADoAMD5ChDbfVnANpHNqEolRXCW0PKHUMBzSzEnBHX2V+VcY+Y275Q0sdrxmT/AOEd2W2R15GRWXpykAjbpsdq7ManJPKfU+G0jKd2Y05MY5OUcuPLl6VGEN8s7s9fM4muWkZmsouRe7EznkwOX2beXAxjGNztXMkuhr01klC2Weu1df8A9I7cVrGi8ioqp+iqgDfrsNq6wjI5yby31PMljEyhGiQquOVSqkDGwwCMCpwSrJp5TeTOABsKHB9oBQCgFAKA/9k=" alt="Education" className="section-icon" />
                Growing at Tshwane University of Technology and ICEP
              </h2>
              <p>
                My final year at TUT has been transformative. I dove deep into full-stack development with hands-on projects in:
              </p>
              <ul className="tech-list">
                <li>React & React Native for dynamic user interfaces</li>
                <li>Node.js, Express, and Flask for robust backends</li>
                <li>PostgreSQL, MongoDB, and Firebase for data management</li>
                <li>RESTful APIs, MVC architecture, and Git workflows</li>
              </ul>
              <p>
                Beyond code, I learned how to <strong>draft technical documents</strong>, present in team meetings, brainstorm solutions, and collaborate across disciplines , turning ideas into working software.
              </p>
            </div>
            <div className="journey-image full-image">
              <img src={tutCampus} alt="ICEP Internship at TUT" />
            </div>
          </div>
        </div>
      </section>

      {/* ICEP Internship Section */}
      <section className="journey-section icep-bg section-to-animate">
        <div className="container">
          <div className="journey-content reverse">
            <div className="journey-image">
              <img src={icepTeam} alt="ICEP Internship Team" />
            </div>
            <div className="journey-text">
              <h2>
                <img src="data:image/jpeg;base64,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" alt="Internship" className="section-icon" />
                My ICEP Internship Experience
              </h2>
              <p>
                At ICEP, I stepped into the real world of software development  and it was <strong>amazing</strong>.
              </p>
              <p>
                I worked on <strong>Smart Events</strong>  an internal platform where TUT students and staff can <strong>book venues</strong> across campus to host events. My role spanned:
              </p>
              <ul className="role-list">
                <li>Frontend (React) - intuitive booking UI</li>
                <li>Mobile (React Native) - on-the-go access</li>
                <li>Backend integration - real-time availability</li>
                <li>UI/UX design collaboration</li>
              </ul>
              <p>
                It was more than coding - it was about solving real problems, communicating with stakeholders, and shipping a product that mattered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="journey-section section-to-animate">
        <div className="container">
          <h2 className="section-title">
            <img src="https://simpleicons.org/icons/react.svg" alt="Mobile App" className="section-icon" />
            Smart Events in Action
          </h2>
          <div className="project-preview">
            <div className="video-wrapper">
              <video
                src={smartEventsVideo}
                poster={smartEventsApp}
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p>
              Watch the Smart Events mobile app in action - seamless venue booking for TUT events, built with React Native and integrated with our backend system.
            </p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="journey-section awards-bg section-to-animate">
        <div className="container">
          <h2 className="section-title">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc56KmzhLd04Jb9mCf5dH-vYmC_9rbgvAw-w&s" alt="Awards" className="section-icon" />
            Recognition & Achievements
          </h2>
          <div className="awards-grid">
            <div className="award-card">
              <img src={frontendCert} alt="Frontend Developer Certificate from ICEP" />
              <h3>Frontend Developer Certificate</h3>
              <p>Recognized for excellence in frontend development during my internship.</p>
            </div>
            <div className="award-card">
              <img src={bestInternAward} alt="Best Overall Intern Award from ICEP" />
              <h3>Best Overall Intern</h3>
              <p>Awarded for consistent performance, teamwork, and impact across projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="journey-section reflection section-to-animate">
        <div className="container">
          <div className="reflection-content">
            <blockquote>
              “This journey didn’t just teach me to code , it taught me to <strong>listen, adapt, create, and lead</strong>.”
            </blockquote>
            <p>
              I’m incredibly grateful to TUT for the foundation and to ICEP for the trust, mentorship, and opportunity to grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}