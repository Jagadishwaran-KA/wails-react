import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const date = new Date();

  const sent_data = [
    {
      filename: "Video.mp4",
      size: "101mb",
      date:
        date.getDate().toString() +
        "/" +
        date.getMonth().toString() +
        "/" +
        date.getFullYear().toString(),
      format: "MP4",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAhFBMVEX///8AAADr6+tra2sEBAQJCQm9vb0NDQ3BwcHHx8cHBwfY2NicnJyioqL09PQcHBxTU1NGRka2traWlpZLS0smJib5+fnW1tZaWlqoqKjv7+/Nzc2vr68kJCQWFhZ2dnbh4eGPj480NDRvb2+BgYE8PDyHh4cuLi5jY2M4ODh8fHxPT09l2BwzAAAKFUlEQVR4nO1d53qzOgwmgyQkZJI9IWlGm/u/v9PW8oAMbFmGfufh/Q22BdqSbc+rUKFChQoVKlSoUKFChf8j6r2gNdmuVttJK+ity14NAutOdBgd97U0mvvj6BB1/hGCBq2P6bD2FsP7pTMoe51vMe8cjs33RIi/8/nVKXu5LzBYjdp6RHC0R6s/92Pmq5FvRgWDP9rOy167gt4hK9cG2B96Za8fMBm/4Jzj/Xa4RGF/teqH0eVwm15f8N54UjYN3zwVzp585PGhv3mqZdeb/mH85Pddw3I5bB49aNpZox/nvRb3bw/kD8skJdylF+Pfo1j33TiadtNv7/oOl/oOnWtqHd27qTJd9zO0HAM3K32LeJRm8gTledSTNI8tY+Jl5iJRFVBzZPEpO6kv0o7o1qiBxac69ym2G63XUI3puUCzkiis7R/q9gPWTwopflE/pa4YwGaDgIwfxA3F25wSDfoeLcWejRd04y6U77MvwDO+yC83JPYsttK6NhPaoR8wUFTMidwHXzcURezUw4+PYqKZE+PVkb7Cp0NBWch/f3P0wQZLMcXOmR7uCCPY3rqaw/NWchZHHstE6PqrU5vVE16L33Ix/lZYQbdyqGoU30HEtRVq94N+8Cy+hBomp2TC/0e3kKgh5J+Nmrs6vqOBX0EIpE8q8QuuSVwpkkcIFdkmdINibj/2G7pB8xBwSnZklnHA7Xm7QDoUSo5UWpJrQ1p2zYcQzCXNeBeurwqSc4kJ110kvnCLj1ZCtibk5oQgPqnzOKoAO/gIbhn39gLP4zYiPjUFl8+77UAJDHQtqZIx4B6kZUZiAZ5Ju7TUfw+UsG+3Ap6/chh/5GEFSzjbDMIZ60a1Kgx4zBjih4jht85KLfUNII5v4zUXVxllJMkVdGwVJx/gRLkqDBqWHxTqH8PSa8hr8L4/ca9z/8Aw2rwMfcpM6i+45lphXp6DjI3NXvt1KnzUjG9wBq2DeTcCf83w64KiO9GWNjfwSxCO6xz4smH2Wr3G7RdtxvPGRt2Zfx+QEN9wPYKQ2pBUacdd7C8BZ+1g+JokhLg0ACr4avreBGlNFUJoU5J1H6VDeRhibAtThJAmiW8oJdoD7ohNp0sTQpm2hyXVzJZ0YC+NjKfLEFKrfRkP8Qp3xIBzCNTNFQ8QMpYNDWOqZswWaEMTDbxCqghBSGN9F5TsqNJ6O3NxB/8doT85IWr517cIiVRAgs3Amx8wVddFMIUkRC3I30gcljr7NG39wYCzMCkYhRC1BvwZI8Z6ANgEfU0InIVxYVVCvPlNULKnyLeGhrw1Zx6sj7HLKUK+pxYF1OYFMVoGa8Zbe93nO3jOyhLibWRpfmTvsABv6VoFsIao3F6WELWXaGYdOCZsIN00NMhojJnqgRClRFtr2waO4KZo5uoGjBNRYeUzQrytbBu0DRyZTezqjdJ6shZtPCPE68l+VMvA8WYiJB/sYVxd5ykhaquMXeAIClhPA04tROQFId9iKhyWpk2BAIREzytnClNbWafxihAvkHrYJnBkbs9O59E1m80wEuN4SYhXPwtKLAJHUOY6nwLMoWnWAfCaEG9+knoY3Stz0pf2yEbW3xHy7YzK7l5s4AjSrhMYgF1HRkNvCfEW1oFjoP8dwPVFBqjvCfGsA0cYX8cBZg5KGzOLl0tIKnBEcS/jTh0nhSm4I2YST4MQNXBsIBwW5iQMNZ5kc2AL9PmEWAaOTP92tVeCreNqEGIXOIKzk29IwAlAmhEtQqwCRzAkce6DoN+wgakeIRaBI7i0+SoPnHisZ6dJCD5wTNhL+X1PUE/A5tR0CUkFjiYOCzge+bK1ZQ9iu8z0CVECR5MqDPgo+bRDcg4bXRsQogSOBrP12Rv5SboCCZGelwtCimOtlVvWKkzYD46FvSj1i40XE/ZSfmRVjEEM3BvEQlyUSGyqMS7Ga7sokHtw6TQqWS7znZPaTqPHAp+p6QQAHTdeyTvGxhMw18bXeJLFPYg66C/yCZnITDAmsGK2RyewchzqfggyXIe6bpMPU0GH8+SDy3TQRu5gnTpPBzlM0PVlgg679yHUX527lKncG723TZnq8IurJHYsz4k4xrjBPdGlqeUNuCkrdGj6IJju1isLQlYzRk2UX+jp2hR6FmwMvULPxUbaX5Te5MEEJKU3PQcNpB3nbT0vhipJeLtiKHhaeh/DZXka61RzMPn1NYXs00JInhCihIK2HY4gIrqbeyDjRN7CYd9zmrCBdK0pCAnKk88Sgg8FnwE+irb7xHga00CXJcQiFHw2uGGbE3eAMQr4ZeMZxSE6po1nPEmH4a2/1QrImzMROl8hZGJXY3tEbNycSdIuaxsKPsK8XZbnTRE2UTQw24aCT4BoYOYt5eYSylvKrUPBR/CWcqOX6Jr86bbBwz82a/7A7XHwHrdd0J00s8AtaSy1jxHShFiEgg8Am2RqE6C6YLpXLE0I5SFcfLeYcWEe8pqme5MUQqxCwQdA5sK8tYRv34vNXnO2fQ9CZfOSoO2GSstQMAuQkBnCRYBfgtziahsKZmCxxRW76fjXMyE/ow7SWbgaARSCTQ+uuAz9KfWZHVbbwEWz/x/YmA8eE/YgDsh8I7vkCcHjM7T3yWt9JV8e0OL2FT0CP05kVypz8RMfbA5Ciqy/BQEIDngRag/dY0MArjyRdQ5AD2pM5R2CtPBxvlIWnLnKOnVnvaNgrB/w2Ns8WCTBnWx6cXQb3cZ0A/AE+JAg8O80qX6uOThjd0lCggRGoz/pNQ/iRFuiEI0rcr9gC9/iZXkqMzbgheXijmT9QcDpOJMd31PflUCJg0NZ1WNyC+MuwVd7UlssfrOLU6qfQZzATc0E4gM1C9HCkThKmpwFxEmvRVhGsWOx64AB5LHxBFXNt5Bb49wwsuCu2sypL7wQJQlXqiWQzewO4xPZnbZ3puzlt3J2mv+6iEsivi2jrNPunPz2luwvID7ELgOlibrWIL8zcy3r8rWl6xvTEuVqG2JJWcl6Nm1J4jmUnr7amfAg+Y3ciEFckniFutwB/e1hxzSDxgpX1UZFXfQaKddndSluskrdYkV1HJcOegob1PybpZ5c3NRL+MYxyRJ1EaVuzbxbHDrVmqoj7Qs/Zj9eqvPXdhcUh8WX9N2Qt0IuR8sg+EytoTkODWW0Ho7T1wlTKkEjrDI3fzbHiba4LJIMFbVriQlmr5+5NfSbx25hLjGLcPl4aWpZN4YC5v1rdkk/19GewuApt9eD8HR+crvucfUHLjx+dUGwfx0vTx9JFPb7YZR8nJbj2YtrnaeF32zyAvFXzkXm7zD8istev4L5ZGl4FThDe/kHbmvOYL5dGl6lvV/+qavAVQQf524+AT/wzx9lGQ1NzIPL6EEnpzEbJcFf/RUZDILwa3keZv6OPzwvv/qb0hspEBjEm05rst1OWsEm/hcJqFChQoUKFSpUqFChQoV8/AfCSntbHPEtigAAAABJRU5ErkJggg==",
    },
    {
      filename: "rockyou.txt",
      size: "1.1GB",
      date:
        date.getDate().toString() +
        "/" +
        date.getMonth().toString() +
        "/" +
        date.getFullYear().toString(),
      format: "txt",
      url: "https://cdn-icons-png.flaticon.com/128/4248/4248321.png",
    },
    {
      filename: "Image.png",
      size: "101mb",
      date:
        date.getDate().toString() +
        "/" +
        date.getMonth().toString() +
        "/" +
        date.getFullYear().toString(),
      format: "MP4",
      url: "https://cdn-icons-png.flaticon.com/128/3342/3342137.png",
    },
    {
      filename: "word.doc",
      size: "1.1GB",
      date:
        date.getDate().toString() +
        "/" +
        date.getMonth().toString() +
        "/" +
        date.getFullYear().toString(),
      format: "txt",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAwFBMVEXd6vv///8AAAC+2PvL4v/k8f/i7/+dnZ3O5f/D3f8eISaxxNiUqcJtdHyiuNWvucShqrXV4vBESE1DTFnV7P/D2fMlKS9ue4qIl6pQVVtUYG+nsbuTnKjY8P9caXozODzS0tL09PSou9G9vb1/j6bIyMgYGBjb29u30PCLi4sODxKtra0sMTedrsF0dHRRUVEvLy9/hpBBQUFoaGg6Qkx/f4BMVmS5xNHo6OjE0N90hJmuxeJbYWmJkZxndIgWGB6BlG8kAAAHdklEQVR4nO3ce3uaPBgGcCpIQe1BRau2Vqn1hNZDZ63Wrvv+32o8CSCnhBDCxvuu9x+7tlnx1ychQAxIFyliDudrq8SeyeDHfDQ8pPkIFCnFzw7XKUDnvK7GuaHMORcJ53KaD+otg6lU2szNHFDYtLx6uEnIC87Pu2bINRKOGqPtXtXVclmlxn7Z0OwYRqvaC6pWpliUifr4bVliiqEpEK1f3SHN4yNWDYZCUVPY5pbRZAerFK2FirU71Za4Z7Hth4wo2POWdZUZ5bK0PlL1DPkDF4tJxYh6hQ7FXiifqoX6+7WuX/+Cv0xYVIyoTYoeFVJVUa/SZf20Y60VG8rkQTkq1ICVkyzLM1S0SfLQkAJ1nxaFVbhUNd1TJdcqGXU4TKdDPpSEStXaQ/spMnutklCL1cQd+zhQSGXcwa6LUIy1oqMWA9+AzIOCBjQ69pstWZaZa0VDhc4LeFCg0l7g3bKrYtgHaagfGGNVKhVulN2A2pMf5dTKotWKgrpEpHbnqVp9qnCjtDCKoVZk1BC9tQNHfK3V5kZJEZQ+26NNk2tFRqHGezbwsSIDSgujvFoRzxmIKBPeducewDKgpCgqqVZE1ALeVRWBMiIou1YDWq2IKDj9XfYVASg1BiVTa0VEraD1DBGo8nsMSqf1qz+AUuNQ1Fr9PZQ+W5JqFYMyh6PFYrEWhzrCZ590Uq2io2gEZfqmCwSh6mgUjqJ0vA9uIpMNYdSl/xAsBiWV4SC1j5i8Wq3pKDN4bS4K9RM2VlPiVOhQf0lFrTCmstvtKmQUDRf72rGNVNEGtK8mKjGdPYBCo3hpVzvNZrMeGbVtkLONQ6moVNbdzL6m8QdUNXjpBxl1QKZn9MMyEYUbg5iHuFqVu/jF3sezl06nNrM/SulFRys/CnWoD6fIZNQVFRV7ba/WuzE/ai33NbsB25G+7kOh66i92/BEFB4LiXmPvbZXJcKvsnxW0AX9mIAaw/h0nYiyB8MHco6k+Qb1phE/Xdqswf/PCSjo5pa3X1A6ulomh0CCZi+/P1x1u92mk925FeEPMx4F4+aOBcUbFW9Ac9I6bZfngo3IqGaeKDeGO3vVb3W8Jn37yyjpPKnmzKrZeWVA6fmiXJXNclT+wzIR9Wz/60XLDeUrFlZZ42SULH98vXi/Th4oZ07G3rgV7ulklKy4prxQ7lxfB6EWbCglb5Qzq9ZCI8NlUVBYZXwUC4VU+BKaBaXLMy3njn5WWayV2u/u/gQK9kFtyYbS4euUTn6DZ0ClNRkrlfOI7oumaPvCoaRCorQioqRCoqRCooq399np/l9R9O/b2SMQpdaTliYw5nzdmhmlHv1fbWWJ5X0rnRmVMJeQKu7399lRW3EocX2q/imIZD0Iaz7o6WIiievoeeQb9a+jaFNjaXLeTpGGhFtxIzp9yjpVhFVK5GHmKOowkzBlnSaN7M1365263IrJjYAR/byoizJlnSbZTvIUZVniWGnGHj5U+xvFgxJ13aBm6ugY5Z2S3V+Jydb7dokLhWa1HFT5Xtg4VclUqQBK1KHPzlEUSr0VZpoIaz5Jui1en5KkNIutacm49xkBlPj8l1F6IVGPAdQggOL6YlsEqkdEqfV7clLdcpCtUn0/6r1CGXraxIUJuaJ4lpWIRD3GojgW4IhEXQVQP1mu+z7rHKYMlXJREuXOJ87dTwBKfNKget8oLhTXzp4Dqv+NIqF2AdS+GKhmEVHBSnWLiGoGUClvOvynUI1ioAYB1M5DNfJFNYioBQUFZyuf+aFgVVD8SjNALT3Ulx+Fll0NuE6VGFK+KREXClJQ2glO4PKaNVOhHTYmI2rgopQWrPSd1HNR4fNr/4rmEKoSQC09FF5hODiKV5XVB3QefSCj2gSUouFF0dsj11egOKoU89pNA23Y181ToKq/8JXBgHKDA/HGB8RSj5/Rl5x7d1cXFBSp+UDlW6edNuiw6d7oEJM3kx3V9qEUo7rnRjX7sAB9R3o50HY01F0YpWjG9WebD/Xi3Y8cibWOPp0jhPrloWC4rARQsCK6+tThyJOzSPjl/F9Q9fVisRgNI6QAagSoGQ0FLK5E3t2HhlhFOVwoUTH4ULBI3ioGyvJQqFdqyZvnSx/2mLfUqGtvr8kh+MEO4ZEgESXL8LbHvFDQeiUzNUqB0dO5jVx0DOiw4fvnmCqFH3nS4RwEqMGjKPlxOCFU6YxS0K9TWsKjCUTmqYMncsP3ZDKhZN2ZRoSHOAiMc6MTufGoKFn+4jvSsYT6OKowquVH6Z0Mpyu0vDI/GCSKkvVZpzdJ+oS0qayIAxRL88noppDTtZDAwXQznE4PtIZjQyGYgMgK3Nvrv45iQ41JKCHRi4hSYMTcMJn8qCF06euYe73FoOC7ulcyhIBC9yF/xd0WLyInGF3mZAgBhZ7k0o552IKI4OM743MF/Sj0zJudnIcK9ajS2kyPwk8mWNaEjAGBzPCD8lgfDBlATfGQ2/uoCU3nEV8uEk9/qaiLsfBjii/MpvAzOIb5mVI8pjL8YBBzvsmFtCafZyajLi4Oo5Vgl7WeD9nLZOc3xLZhI9nFaYgAAAAASUVORK5CYII=",
    },
  ];

  const receive_data = [
    {
      filename: "Image.png",
      size: "101mb",
      date:
        date.getDate().toString() +
        "/" +
        date.getMonth().toString() +
        "/" +
        date.getFullYear().toString(),
      format: "MP4",
      url: "https://cdn-icons-png.flaticon.com/128/3342/3342137.png",
    },
    {
      filename: "word.doc",
      size: "1.1GB",
      date:
        date.getDate().toString() +
        "/" +
        date.getMonth().toString() +
        "/" +
        date.getFullYear().toString(),
      format: "txt",
      url: "data:image/png;base64,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",
    },

    {
      filename: "Video.mp4",
      size: "101mb",
      date:
        date.getDate().toString() +
        "/" +
        date.getMonth().toString() +
        "/" +
        date.getFullYear().toString(),
      format: "MP4",
      url: "data:image/png;base64,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",
    },
    {
      filename: "rockyou.txt",
      size: "1.1GB",
      date:
        date.getDate().toString() +
        "/" +
        date.getMonth().toString() +
        "/" +
        date.getFullYear().toString(),
      format: "txt",
      url: "https://cdn-icons-png.flaticon.com/128/4248/4248321.png",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <h1 className="text-3xl">Welcome Amanda Smith ^_^ </h1>
      <div className="flex flex-col justify-center cursor-pointer mt-5">
        <button className="bg-black text-white p-3 rounded-md tracking-widest">
          <Link to="upload">UPLOAD FILES </Link>
        </button>

        <div className="flex space-x-10 mt-10">
          <div className="space-y-2">
            <h1 className="text-xl font-mono mt-3">Sent</h1>
            {sent_data.map((item) => (
              <div className="flex space-x-4">
                <img
                  className="w-10 object-contain"
                  alt={item.filename}
                  src={item.url}
                />
                <div>
                  <h1>{item.filename}</h1>
                  <p>
                    File Size {item.size}| {item.format} | {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="border border-black"></p>
          <div className="space-y-2">
            <h1 className="text-xl font-mono mt-3">Received</h1>
            {receive_data.map((item) => (
              <div className="flex space-x-4">
                <img
                  className="w-10 object-contain"
                  alt={item.filename}
                  src={item.url}
                />
                <div>
                  <h1>{item.filename}</h1>
                  <p>
                    File Size {item.size}| {item.format} | {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to="upload">
        <button className="bg-gray-600 text-white p-3 rounded-md -tracking-tighter mt-10">
          Create New Folder +
        </button>
      </Link>
    </div>
  );
}

export default Home;
