
url = "https://q0p9dv6zo6.execute-api.us-east-1.amazonaws.com/dev/"
testdata = `
[
	{
		"name": "Clem",
		"tag": "#L98LJ9UP"
	},
	{
		"name": "Ethanol",
		"tag": "#Y0JPLRUPC"
	},
	{
		"name": "Tank",
		"tag": "#LJCQPL08"
	},
	{
		"name": "Reibies",
		"tag": "#UQ0U229R"
	},
	{
		"name": "Sphinxio",
		"tag": "#8CQ928UC"
	},
	{
		"name": "RageClem-",
		"tag": "#29YLRLYJP"
	},
	{
		"name": "CommunityClem",
		"tag": "#90Q99LG88"
	},
	{
		"name": "Big Mama",
		"tag": "#YURVYLV8J"
	},
	{
		"name": "Luke Da Great",
		"tag": "#289RJJ8PC"
	},
	{
		"name": "ZACxGAMES",
		"tag": "#92VV8JJ98"
	},
	{
		"name": "Alejandro",
		"tag": "#UJCL0J0J"
	},
	{
		"name": "AeroWolf",
		"tag": "#LJ2Y2LJC0"
	},
	{
		"name": "Matt11037",
		"tag": "#YULYLG2JR"
	},
	{
		"name": "ItsShkmooovee",
		"tag": "#LLPLPLRLC"
	},
	{
		"name": "Sam’s Club",
		"tag": "#QLYJYULJ2"
	},
	{
		"name": "Jay",
		"tag": "#P9PVQYRPY"
	},
	{
		"name": "Plague",
		"tag": "#JJUUYGCR"
	},
	{
		"name": "SoundWave",
		"tag": "#VYR8YUU9"
	},
	{
		"name": "Frogster236",
		"tag": "#V00U22Y9"
	},
	{
		"name": "DARREN",
		"tag": "#88ULC9LQG"
	},
	{
		"name": "MaxMeister",
		"tag": "#20LJJURVU"
	},
	{
		"name": "RageCoc-",
		"tag": "#C2YGLYPC"
	},
	{
		"name": "Stab the Sun",
		"tag": "#YLG8J8YP"
	},
	{
		"name": "yeison6910",
		"tag": "#LPLR280L8"
	},
	{
		"name": "Ya Boiii Barloz",
		"tag": "#C0J2YPJ"
	},
	{
		"name": "wrinkly",
		"tag": "#QRY2LJ8Q8"
	},
	{
		"name": "GAGAN",
		"tag": "#9QRGCR0YJ"
	},
	{
		"name": "MrmatrixX98",
		"tag": "#LCGP9PJJR"
	},
	{
		"name": "clementine",
		"tag": "#QY0J0GP2Y"
	},
	{
		"name": "JR",
		"tag": "#882980L"
	},
	{
		"name": "red icy",
		"tag": "#L0C0UJGYQ"
	},
	{
		"name": "Shark",
		"tag": "#Q8R0PL8UY"
	},
	{
		"name": "butt",
		"tag": "#LJQRJQ9RR"
	},
	{
		"name": "cap",
		"tag": "#98LQ0U8R"
	},
	{
		"name": "Slashtreece",
		"tag": "#8LQ0UL90"
	},
	{
		"name": "LyricMK",
		"tag": "#YVG90L9LJ"
	},
	{
		"name": "Selene",
		"tag": "#G9U20L2U"
	},
	{
		"name": "Alex Caruso",
		"tag": "#LVGR829VQ"
	},
	{
		"name": "KyleJ041",
		"tag": "#LR8GJCCQY"
	},
	{
		"name": "Alert-Kracken",
		"tag": "#L2U8VR20G"
	},
	{
		"name": "Gas der Juden",
		"tag": "#YLLG20VP"
	},
	{
		"name": "aj",
		"tag": "#QQPCRQVQQ"
	},
	{
		"name": "AcFizz",
		"tag": "#9U8VYPJYJ"
	},
	{
		"name": "Jew Shiesty",
		"tag": "#QCYYVY82U"
	},
	{
		"name": "Little Barloz",
		"tag": "#LUCCLU2P0"
	},
	{
		"name": "Og",
		"tag": "#Q98JU9GJP"
	}
]
`
async function getClanTags(){
    fetch(url+'getClanMemberNamesAndTags',
        {
            method: "GET", 
            mode: 'cors',
        }
    ).then((response) => response.json())
    .then((data) => {
        update_dropdown(data)
    });
}

function onLoad(){
    getClanTags()
    var form = document.getElementById("my_form");
    form.addEventListener('submit', onFormSubmit)
}

function update_dropdown(members){
    var player_input = document.getElementById("player_name_input")
    members.forEach((member, index) => {
        var newOption = document.createElement("option")
        newOption.value=member.tag
        newOption.innerHTML=member.name
        player_input.appendChild(newOption)
    });
}

function onFormSubmit(event){
    event.preventDefault()
    var player_input = document.getElementById("player_name_input").value
    var phone_number = document.getElementById("phone_number").value
    // console.log(player_input, phone_number)
    fetch(url+'gimmeYourNumber',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({ "PlayerTag": player_input, "PhoneNumber":phone_number })
    })
}
