const api_key = "447b2ad5ce3340dcae2e996df1c9c9fd";
let code_id_jerman = 2002;
let code_id_belanda = 2003;
let code_id_inggris = 2021;

const standings_jerman = `https://api.football-data.org/v2/competitions/${code_id_jerman}/standings`;
const standings_belanda = `https://api.football-data.org/v2/competitions/${code_id_belanda}/standings`;
const standings_inggris = `https://api.football-data.org/v2/competitions/${code_id_inggris}/standings`;

const teams_jerman = `https://api.football-data.org/v2/competitions/${code_id_jerman}/teams`;
const teams_belanda = `https://api.football-data.org/v2/competitions/${code_id_belanda}/teams`;
const teams_inggris = `https://api.football-data.org/v2/competitions/${code_id_inggris}/teams`;

let team_data;

var fetch_api = (url) => {
  return fetch(url, {
    headers: {
      "X-Auth-Token": api_key,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        console.log("Error: " + response.status);
        return Promise.reject(new Error(response.statusText));
      } else {
        return Promise.resolve(response);
      }
    })
    .then((response) => response.json());
};

function json(response) {
  return response.json();
}

function error(error) {
  console.log("Error : " + error);
}

async function get_standings() {
  try_loader();
  if ("caches" in window) {
    const response = await caches.match(standings_jerman);
    if (response) {
      const data = await response.json();
      fetch_standings(data);
      document.getElementById("loader_main").style.display = "none";
      return;
    }
  }
  try {
    const data = await fetch_api(standings_jerman);
    console.log(standings_jerman);
    console.log(data);
    fetch_standings(data);
  } catch (_) {
    M.toast({
      html: "Tidak dapat mengambil data dari API !",
      classes: "rounded red center-align",
    });
  } finally {
    document.getElementById("loader_main").style.display = "none";
  }
}

async function get_standings_belanda() {
  if ("caches" in window) {
    const response = await caches.match(standings_belanda);
    if (response) {
      const data = await response.json();
      fetch_standings(data);
      return;
    }
  }

  try {
    const data = await fetch_api(standings_belanda);
    console.log(standings_belanda);
    console.log(data);
    fetch_standings(data);
  } catch (_) {
    M.toast({
      html: "Tidak dapat mengambil data dari API !",
      classes: "rounded red center-align",
    });
  } finally {
  }
}

async function get_standings_inggris() {
  if ("caches" in window) {
    const response = await caches.match(standings_inggris);
    if (response) {
      const data = await response.json();
      fetch_standings(data);
      return;
    }
  }

  try {
    const data = await fetch_api(standings_inggris);
    console.log(standings_inggris);
    console.log(data);
    fetch_standings(data);
  } catch (_) {
    M.toast({
      html: "Tidak dapat mengambil data dari API !",
      classes: "rounded red center-align",
    });
  } finally {
  }
}

function try_loader() {
  const loader = `
  <div class="progress">
    <div class="indeterminate"></div>
  </div>
  <img id="img-res" src="asset/img/loader_utama.gif" alt="Loading..." />
  `;
  let loader_up = document.getElementById("loader_main");
  loader_up.innerHTML = loader;
}

function try_loader_2() {
  const loader2 = `
  <div class="progress">
    <div class="indeterminate"></div>
  </div>
  `;
  document.getElementById("loader_main2").innerHTML = loader2;
}

function fetch_standings(data) {
  let standings = "";
  data.standings[0].table.forEach(function (standing) {
    standings += `
      <tr>
          <td>${standing.position}</td>
          <td><img src="${standing.team.crestUrl.replace(
            /^http:\/\//i,
            "https://"
          )}" width="35px" alt="logo_icon"/></td>
          <td>${standing.team.name}</td>
          <td>${standing.won}</td>
          <td>${standing.draw}</td>
          <td>${standing.lost}</td>
          <td>${standing.points}</td>
          <td>${standing.goalsFor}</td>
          <td>${standing.goalsAgainst}</td>
          <td>${standing.goalDifference}</td>
      </tr>
        `;
  });
  document.getElementById("main-content").innerHTML = `
  <div id="style_card" class="card"><br>
  <div class="input-field s12">
  <select id="sel">
    <option value="" disabled selected>Pilih Liga</option>
    <option value="2002">Liga Jerman</option>
    <option value="2003">Liga Belanda</option>
    <option value="2021">Liga Inggris</option>
    <option value="">Liga Spanyol - Maintenance</option>
    <option value="">Liga Perancis - Maintenance</option>
  </select>
  <label>Default : Liga Jerman</label>
  </div>
  <table class="striped responsive-table">
      <thead>
          <tr>
              <th>No</th>
              <th>Ico</th>
              <th>Team Name</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>P</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
          </tr>
       </thead>
      <tbody>
          ${standings}
      </tbody>
  </table>
  
  </div>
    `;
  document.getElementById("news-content").innerHTML = `
    <div class="col s12">
    <div class="card">
      <div class="card-content">
        <div class="center flow-text">News Liga</div>
        <div class="card-action"></div>
        <img id="img-news" src="/asset/img/news_1.jfif" alt="img-news" />
        <p>
          Archie Rhind-Tutt explains why he feels Gio Reyna won't be at
          Dortmund long-term, despite signing an extension.
        </p>
        <p style="font-size: 10px; color: red">
          Source : https://www.espn.com/
        </p>
        <div class="card-action"></div>
        <img id="img-news" src="/asset/img/news_2.jfif" alt="img-news" />
        <p>
          Julien Laurens explains why Germany should be excited for Youssoufa
          Moukoko's pending debut.
        </p>
        <p style="font-size: 10px; color: red">
          Source : https://www.espn.com/
        </p>
        <div class="card-action"></div>
        <img id="img-news" src="/asset/img/news_3.jfif" alt="img-news" />
        <p>
          Find out where David Alaba and Angelino's free kicks rank in the top
          five this season. Watch the Bundesliga on ESPN+.
        </p>
        <p style="font-size: 10px; color: red">
          Source : https://www.espn.com/
        </p>
      </div>
      <div class="card-action right-align"><a>See all News</a></div>
    </div>
  </div>

    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <div class="center flow-text">Thanks to Dicoding</div>
          <div class="card-action"></div>
          <p>Semoga Lulus Aamiin 😇</p>
        </div>
      </div>
    </div>
`;

  $(document).ready(function () {
    $("#sel").formSelect();

    $("#sel").on("change", function (e) {
      if (e.target.value == 2002) {
        get_standings();
      } else if (e.target.value == 2003) {
        get_standings_belanda();
      } else if (e.target.value == 2021) {
        get_standings_inggris();
      }
      console.log(e.target.value);
    });
  });
}

async function get_teams(params) {
  try_loader_2();
  if ("caches" in window) {
    const response_teams = await caches.match(params);
    if (response_teams) {
      const data_teams = await response_teams.json();
      fetch_teams(data_teams);
      document.getElementById("loader_main2").style.display = "none";
      return;
    }
  }
  try {
    const data_teams = await fetch_api(params);
    fetch_teams(data_teams);
  } catch (_) {
    M.toast({
      html: "Tidak dapat mengambil data dari API !",
      classes: "rounded red center-align",
    });
  } finally {
    document.getElementById("loader_main2").style.display = "none";
  }
}

function fetch_teams(data) {
  team_data = data;
  var teams = "";
  data.teams.forEach(function (tim) {
    teams += `
        <div class="col s12 m6 l6">
        <div class="card">
          <div class="card-content">
            <div class="center"><img width="64" height="64" src="${
              tim.crestUrl || "img/empty_badge.svg"
            }"></div>
            <div class="center flow-text">${tim.name}</div>
            <div class="center">${tim.area.name}</div>
          </div>
          <div class="card-action right-align">
              <a class="waves-effect waves-light btn-small teal lighten-1" onclick="onclick_insert_team(${
                tim.id
              })">❤ Favorit</a>
          </div>
        </div>
      </div>
        `;
  });
  document.getElementById("main-content").innerHTML = teams;
  var get_html_filter = `
      <div class="card-action center-align">
        <p>Filter Liga</p>
        <a class="waves-effect waves-light btn-small orange lighten-1" onclick="onclick_liga_jerman()">Liga Jerman</a>
        <a class="waves-effect waves-light btn-small orange lighten-1" onclick="onclick_liga_belanda()">Liga Belanda</a>
        <a class="waves-effect waves-light btn-small orange lighten-1" onclick="onclick_liga_inggris()">Liga Inggris</a>
      </div><br>
      `;

  document.getElementById("data_teams_fav").innerHTML = get_html_filter;
}

function onclick_liga_jerman() {
  get_teams(teams_jerman);
}

function onclick_liga_belanda() {
  get_teams(teams_belanda);
}

function onclick_liga_inggris() {
  get_teams(teams_inggris);
}

var team_favorite = () => {
  var teams = get_team_favorit();

  teams.then((data) => {
    team_data = data;
    var get_element_fav = "";
    console.log(data.length);
    if (data.length == 0) {
      get_element_fav = `<h6 id="kosong_fav" class="center-align">Data Favorit Kosong !</h6>`;
      document.getElementById("fav-content").innerHTML = get_element_fav;
    } else {
      get_element_fav += '<div class="row">';
      data.forEach((teams) => {
        get_element_fav += `
        <div class="col s12 m6 l6">
          <div class="card">
            <div class="card-content">
              <div class="center"><img id="img-teams" width="60" height="60" src="${teams.crestUrl}"></div>
              <div class="center flow-text">${teams.name}</div>
              <div class="center">${teams.area.name}</div>
            </div>
            <div class="card-action right-align">
                <a class="waves-effect waves-light btn-small red" onclick="onclick_delete_team(${teams.id})">Delete</a>
            </div>
          </div>
        </div>
      `;
        document.getElementById("fav-content").innerHTML = get_element_fav;
      });
    }
  });
};

var get_team_favorit = () => {
  return dbx.then((db) => {
    var tx = db.transaction("tabel_teams", "readonly");
    var store = tx.objectStore("tabel_teams");
    return store.getAll();
  });
};

var dbx = idb.open("db_sibo", 1, (upgradeDb) => {
  switch (upgradeDb.oldVersion) {
    case 0:
      upgradeDb.createObjectStore("tabel_teams", { keyPath: "id" });
  }
});

var insert_team = (tabel_teams) => {
  dbx
    .then((db) => {
      var tx = db.transaction("tabel_teams", "readwrite");
      var store = tx.objectStore("tabel_teams");
      tabel_teams.createdAt = new Date().getTime();
      store.put(tabel_teams);
      return tx.complete;
    })
    .then(() => {
      M.toast({
        html: `${tabel_teams.name} berhasil disimpan!`,
        classes: "rounded green center-align",
      });
    })
    .catch((_) => {
      M.toast({
        html: `${tabel_teams.name} gagal disimpan!`,
        classes: "rounded red center-align",
      });
    });
};

var delete_team = (tabel_teams) => {
  dbx
    .then((db) => {
      var tx = db.transaction("tabel_teams", "readwrite");
      var store = tx.objectStore("tabel_teams");
      store.delete(tabel_teams);
      return tx.complete;
    })
    .then(() => {
      M.toast({
        html: "Tim berhasil dihapus!",
        classes: "rounded green center-align",
      });
      team_favorite();
    })
    .catch((_) => {
      M.toast({
        html: "Tim gagal dihapus!",
        classes: "rounded red center-align",
      });
    });
};

var onclick_insert_team = (ID) => {
  var tabel_teams = team_data.teams.filter((data) => data.id == ID)[0];
  insert_team(tabel_teams);
};

var onclick_delete_team = (ID) => {
  delete_team(ID);
};
