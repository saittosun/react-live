import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SelectInstrument from '../Concert/SelectInstrument';
import SelectStyle from '../Concert/SelectStyle';
import { userActions } from '../../actions';
import "./register.scss";
import SelectCountry from '../Concert/SelectCountry';
import Form from 'react-bootstrap/Form';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import axios from 'axios';

const UpdateProfile = ({ current }) => {

    const { register, control, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });

    let history = useHistory();

    // https://aplaudoapi.azurewebsites.net/api/artists
    const getData = async () => {
        const { data } = await axios.get("/api/artists");
        console.log(data);
    }
    useEffect(() => {
        getData();
    }, [])
    const testObj = {
        ArtistFirstName: "Rasha",
        ArtistLastName: "Ali",
        ArtistNickName: "Rasha",
        EmailAddress: "Rashaali@gmail.com",
        Password: "123456",
        Bio: "Here is my Bio",
        PhotoLink: "http://wwww.google.com/2",
        Spotify: "sot",
        YouTube: "http://wwww.google.com/2",
        iTunes: "tunes",
        SoundCloud: "sound",
        WebSite: "http://wwww.google.com/2",
        LinkedIn: "http://wwww.google.com/linkedin",
        CountryName: "Belgium",
        StyleNames:
            [
                { StyleName: "Asian" },
                { StyleName: "African" }
            ],
        InstrumentNames: [
            {
                InstrumentName: "accordion"
            },
            {
                InstrumentName: "bass"
            },
            {
                InstrumentName: "Piano"
            }
        ]
    }
    const postData = async (x) => {
        // const res = await axios.post("/api/artists", testObj)
        const res = await axios.post("https://aplaudoapi.azurewebsites.net/api/artists", x)

        console.log(res.data);
        res.then(
            (response) => { console.log(response.json()) },
            (error) => { console.log(error) }
        );
    }

    const onSubmit = data => {

        console.log(data);

        const refactoredObj = {
            ArtistFirstName: data.ArtistFirstName,
            ArtistLastName: data.ArtistLastName,
            ArtistNickName: data?.ArtistNickName,
            EmailAddress: data.EmailAddress,
            Password: data.Password,
            Bio: data?.Bio || "",
            PhotoLink: data?.PhotoLink || "",
            YouTube: data?.SocialLinks[0]?.Link || "",
            Spotify: data?.SocialLinks[1]?.Link || "",
            iTunes: data?.SocialLinks[2]?.Link || "",
            SoundCloud: data?.SocialLinks[3]?.Link || "",
            LinkedIn: data?.SocialLinks[5]?.Link || "",
            WebSite: data?.SocialLinks[4]?.Link || "",
            CountryName: data?.CountryName?.name || "",
            StyleNames:
                [
                    { StyleName: data?.StyleNames[0]?.label || "" },
                    { StyleName: data?.StyleNames[1]?.label || "" },
                    { StyleName: data?.StyleNames[2]?.label || "" },
                    { StyleName: data?.StyleNames[3]?.label || "" },
                ],
            // InstrumentNames: [{label: "bass", value: "bass"}, label: "bassoon", value: "bassoon"}],
            InstrumentNames: [
                {
                    InstrumentName: data?.InstrumentNames[0]?.label || "",
                },
                {
                    InstrumentName: data?.InstrumentNames[1]?.label || "",
                },
                {
                    InstrumentName: data?.InstrumentNames[2]?.label || "",
                },
                {
                    InstrumentName: data?.InstrumentNames[3]?.label || "",
                },

            ]
        }
        console.log(refactoredObj);

        postData(refactoredObj)
        history.push("/");
    }

    const [user, setUser] = useState({
        ArtistFirstName: '',
        ArtistLastName: '',
        ArtistNickName: '',
        EmailAddress: '',
        Password: '',
        StyleNames: [],
        InstrumentNames: [],
        CountryName: '',
        SocialLinks: [],
        Bio: '',
        PhotoLink: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    // const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        // dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmitOwn(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.ArtistFirstName && user.ArtistLastName && user.EmailAddress) {
            console.log(user);
            // dispatch(userActions.register(user));
        }
    }

    return (
        <div className="update-cont-main">
            <div className="auth-inner-update" >
                <form name="form" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-update">Update your profile</h4>
                    <div>
                        <label htmlFor="ArtistFirstName" />
                        <input
                            type="text"
                            name="ArtistFirstName"
                            className={"form-control email text-fields" + (submitted && !user.ArtistFirstName ? ' is-invalid' : '')}
                            // value={user.ArtistFirstName}
                            placeholder={current.ArtistFirstName}
                            // onChange={handleChange}
                            ref={register}
                        />
                        {submitted && !user.ArtistFirstName &&
                            <div className="invalid-feedback">First Name is required</div>
                        }
                    </div>

                    <div>
                        <label htmlFor="ArtistLastName" />
                        <input
                            type="text"
                            name="ArtistLastName"
                            className={"form-control email text-fields" + (submitted && !user.ArtistLastName ? ' is-invalid' : '')}
                            // value={user.ArtistLastName}
                            placeholder={current.ArtistLastName}
                            // onChange={handleChange}
                            ref={register}

                        />
                        {submitted && !user.ArtistLastName &&
                            <div className="invalid-feedback">Last Name is required</div>
                        }
                    </div>

                    <div>
                        <label htmlFor="ArtistNickName" />
                        <input
                            type="text"
                            name="ArtistNickName"
                            className={"form-control email text-fields"}
                            // value={user.ArtistNickName}
                            placeholder={current.ArtistNickName || "Artist nick name"}
                            // onChange={handleChange}
                            ref={register}
                        />
                    </div>

                    <div>
                        <label htmlFor="EmailAddress" />
                        <input
                            type="email"
                            name="EmailAddress"
                            className={"form-control email text-fields" + (submitted && !user.EmailAddress ? ' is-invalid' : '')}
                            // value={user.EmailAddress}
                            placeholder={current.EmailAddress}
                            // onChange={handleChange}
                            ref={register}
                        />
                        {submitted && !user.EmailAddress &&
                            <div className="invalid-feedback">Email is required</div>
                        }
                    </div>
                    {(current.EmailAddress !== user.EmailAddress) && <div><div>
                        <label htmlFor="Password" />
                        <input
                            type="password"
                            name="Password"
                            className={"form-control password text-fields" + (submitted && !user.Password ? ' is-invalid' : '')}
                            // value={user.Password}
                            placeholder="Enter new password"
                            // onChange={handleChange}
                            ref={register}
                        />
                        {submitted && !user.Password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>
                        <div>
                            <label htmlFor="Password" />
                            <input
                                type="password"
                                name="Password"
                                className={"form-control password text-fields" + (submitted && !user.Password ? ' is-invalid' : '')}
                                placeholder="Confirm password"
                                ref={register}
                            />
                            {submitted && !user.Password &&
                                <div className="invalid-feedback">Password is required</div>
                            }
                        </div>
                    </div>}

                    <Form.Group controlId="SocialLinks">
                        <Form.Label className={"text-fields"} style={{ width: "100%", marginTop: "10px" }}>Add social media links</Form.Label>

                        {fields.map(({ id, name, type }, index) => {
                            return (
                                <div key={id}>
                                    <Form.Text style={{ width: "100%" }}>Add social media link- {index + 1}</Form.Text>
                                    <select
                                        // ref={register}
                                        name="SocialLinks"
                                        className={"text-fields"}
                                        style={{ width: "200px", padding: "4px", margin: "5px 5px 5px 0", fontFamily: "FontAwesome, Montserrat" }}
                                    >
                                        <option value="Select...">Select...</option>
                                        <option value="YouTube">&#xf167; YouTube</option>
                                        <option value="Spotify">&#xf1bc; Spotify</option>
                                        <option value="iTunes">&#xf001; iTunes</option>
                                        <option value="SoundCloud">&#xf1be; SoundCloud</option>
                                        <option value="LinkedIn">&#xf08c; LinkedIn</option>
                                        <option value="WebSite">&#xf268; WebSite</option>
                                    </select>
                                    <input
                                        type="text"
                                        name={`SocialLinks[${index}].Link`}
                                        ref={register}
                                        className={"email text-fields"}
                                        placeholder="Paste social media link"
                                        style={{ width: "200px", margin: "5px 5px 5px 0", fontFamily: "FontAwesome, Montserrat" }}
                                    />

                                    <button
                                        className="btn btn-sm btn-custom-2"
                                        type="button" onClick={() => remove(index)}>
                                        Remove </button>
                                </div>
                            );
                        })}

                        <button
                            className="btn btn-sm  btn-custom-1"
                            type="button" onClick={() => append({})}
                        >
                            Append </button>
                    </Form.Group>

                    <Controller
                        control={control}
                        name="InstrumentNames"
                        render={({ onChange, value, name }) => (
                            <SelectInstrument
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                    {/* <SelectInstrument /> */}

                    <Controller
                        control={control}
                        name="StyleNames"
                        render={({ onChange, value, name }) => (
                            <SelectStyle
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                    {/* <SelectStyle /> */}

                    <Controller
                        control={control}
                        name="CountryName"
                        render={({ onChange, value, name }) => (
                            <SelectCountry
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                    {/* <SelectCountry /> */}

                    <div>
                        <label htmlFor="Bio" />
                        <textarea
                            type="text"
                            name="Bio"
                            className={"form-control text-fields"}
                            placeholder="Biography..."
                            ref={register}
                            cols={40}
                            rows={3}
                        />

                    </div>

                    <Controller
                        control={control}
                        name="PhotoLink"
                        render={({ onChange, value, name }) => (

                            <Form.Group>
                                <Form.Label htmlFor="PhotoLink" className="text-fields">Upload profile photo</Form.Label>
                                <Form.File
                                    type="file"
                                    className={"form-control email text-fields"}
                                    value={value}
                                    onChange={onChange}
                                />
                            </Form.Group>
                        )}
                    />

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-custom" />
                        <Link to="/signin" className="btn btn-link fgpw">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default UpdateProfile;
