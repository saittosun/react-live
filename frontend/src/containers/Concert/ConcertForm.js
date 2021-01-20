import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import CheckBoxGenre from './CheckBoxGenre';
import Button from 'react-bootstrap/Button';
import { Col, Form } from 'react-bootstrap';
import SelectInstrument from './SelectInstrument';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

import "./concert.scss";
import SelectCountry from './SelectCountry';
import SelectStyle from './SelectStyle';

const ConcertForm = () => {

    const { register, control, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });

    let history = useHistory();


    const [concert, setConcert] = useState({
        Title: '',
        About: '',
        Style: [],
        Date: '',
        ConcertLink: '',
        PictureLink: '',
        ProgrammaLink: '',
        TeaserLink: '',
        CountryName: '',
        InstrumentationValue: '',
        ArtistEmails: [],
        InstrumentNames: [],
        Instrumentation: '',
    });

    //test object to be sure of backend connection
    const testObj = {
        ConcertId: 14,
        About: "This concert is really fun and different let' stry to update ",
        ConcertTitle: "Title is really what matters ",
        Style: "African",
        Date: "12/01/2010",
        ConcertLink: "http://wwww.google.com/44",
        PictureLink: "http://wwww.google.com/442",
        ProgrammaLink: "http://wwww.google.com/44",
        TeaserLink: "http://wwww.google.com/44",
        CountryName: "Belgium",
        InstrumentationValue: "Solo",
        ArtistEmails: [
            { EmailAddress: "par@gmail.com" },
            { EmailAddress: "rasaa@gmail.com" },
            { EmailAddress: "Ralyy.MM@gmail.com" }
        ],
        InstrumentNames: [
            { InstrumentName: "accordion" },
            { InstrumentName: "bass" },
            { InstrumentName: "Piano" }
        ]
    }

    const postData = async (x) => {
        const res = await axios.post("https://aplaudoapi.azurewebsites.net/api/concerts", x)

        console.log(res.data);
        res.then(
            (response) => { console.log(response.json()) },
            (error) => { console.log(error) }
        );
    }

    //state to store the created concert link
    const [concertLink, setConcertLink] = useState("")
    //function to get the link
    const getConcertLink = async () => {
        const res = await axios.get("http://localhost:3007/new-room")
        console.log(res);
        console.log(res.data)
        const concertUUID = res.data
        const concertURL = "http://localhost:3007/"
        setConcertLink(concertURL + concertUUID)
    }

    //click event to create the concert link
    const onButtonClick = () => {
        getConcertLink()
    }

    const onSubmit = data => {

        console.log(data);

        const refactoredObj = {
            About: data?.About,
            ConcertTitle: data?.Title,
            Style: data?.StyleNames[0]?.label || "",
            Date: data?.Date.replace(/-/g, "/"),
            ConcertLink: concertLink || "",
            PictureLink: data?.PictureLink || "",
            ProgrammaLink: data?.ProgrammaLink || "",
            TeaserLink: data?.TeaserLink || "",
            CountryName: data?.CountryName?.name || "",
            InstrumentationValue: data?.Instrumentation || "",
            ArtistEmails: data?.ArtistEmails,
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


    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    // const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        // dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setConcert(concert => ({ ...concert, [name]: value }));
    }

    // function handleSubmitOwn(e) {
    //     e.preventDefault();

    //     setSubmitted(true);
    //     if (concert.Date && concert.ArtistEmails && concert.About && concert.Title) {
    //         // dispatch(concertActions.register(concert));
    //     }
    // }

    return (
        <div className="concert-cont-main" >
            <div className="auth-inner-concert" >
                <form name="form" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text">Create your concert!</h4>
                    <div >
                        <Form.Group>
                            <Form.Label htmlFor="Title" className="text-fields">Title</Form.Label>
                            <Form.Control
                                name="Title"
                                className={"form-control email text-fields" + (submitted && !concert.Title ? ' is-invalid' : '')}
                                placeholder="Title of the concert..."
                                ref={register}
                            />
                            {submitted && !concert.About &&
                                <div className="invalid-feedback">This field is required</div>
                            }
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="About" className="text-fields">About</Form.Label>
                            <Form.Control
                                name="About"
                                className={"form-control email text-fields" + (submitted && !concert.About ? ' is-invalid' : '')}
                                placeholder="Short description of the concert..."
                                ref={register}
                            />
                            {submitted && !concert.About &&
                                <div className="invalid-feedback">This field is required</div>
                            }
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label htmlFor="Instrumentation" className="text-fields">Instrumentation</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Instrumentation"
                                    className={"form-control email text-fields"}
                                    as="select"
                                    custom
                                    ref={register}
                                >
                                    <option value="Solo">Solo</option>
                                    <option value="Duo">Duo</option>
                                    <option value="Trio">Trio</option>
                                    <option value="Quartet">Quartet</option>
                                    <option value="Quintet">Quintet</option>
                                    <option value="Chamber Music">Chamber Music</option>
                                    <option value="Choir">Choir</option>
                                    <option value="Band">Band</option>
                                    <option value="Big Band">Big Band</option>
                                    <option value="String Quartet">String Quartet</option>
                                    <option value="Combo">Combo</option>
                                    <option value="Orchestra">Orchestra</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                            </Form.Group>

                            <Controller
                                control={control}
                                name="Date"
                                render={({ onChange, value, name }) => (

                                    <Form.Group as={Col}>
                                        <Form.Label htmlFor="Date" className="text-fields" >Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            className={"form-control email text-fields" + (submitted && !concert.Date ? ' is-invalid' : '')}
                                            placeholder="dd/mm/yyyy"
                                            value={value}
                                            onChange={onChange}
                                        />
                                        {submitted && !concert.Date &&
                                            <div className="invalid-feedback">Date is required</div>
                                        }
                                    </Form.Group>
                                )}
                            />
                        </Form.Row>

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

                        <Controller
                            control={control}
                            name="PictureLink"
                            render={({ onChange, value, name }) => (
                                <Form.Group>
                                    <Form.Label htmlFor="PictureLink" className="text-fields">Upload picture</Form.Label>
                                    <Form.File
                                        type="file"
                                        className={"form-control email text-fields"}
                                        value={value}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                            )}
                        />

                        <Controller
                            control={control}
                            name="ProgrammaLink"
                            render={({ onChange, value, name }) => (

                                <Form.Group>
                                    <Form.Label htmlFor="ProgrammaLink" className="text-fields" >Upload programma</Form.Label>
                                    <Form.File
                                        type="file"
                                        className={"form-control email text-fields"}
                                        value={value}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                            )}
                        />

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
                        {/* <SelectedInstrument /> */}

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

                        <Form.Group>
                            <Form.Label htmlFor="TeaserLink" className="text-fields">Add teaser link</Form.Label>
                            <Form.Control
                                type="text"
                                name="TeaserLink"
                                className={"form-control email text-fields"}
                                placeholder={"Teaser link"}
                                ref={register}
                            />
                        </Form.Group>

                        <Form.Group controlId="ArtistEmails">
                            <Form.Label style={{ width: "100%" }} className="text-fields" >Add Artist emails</Form.Label>

                            {fields.map(({ id, name, type }, index) => {
                                return (
                                    <div key={id}>
                                        <Form.Text style={{ width: "100%" }}>Add Artist email {index + 1}</Form.Text>
                                        <input
                                            ref={register}
                                            name={`ArtistEmails[${index}].EmailAddress`}
                                            defaultValue={name}
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
                                type="button" onClick={() => append({})}>
                                Append </button>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label htmlFor="ConcertLink">
                                <Button onClick={onButtonClick} variant="info">Create concert link...</Button>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="ConcertLink"
                                className={"form-control email text-fields" + (submitted && !concert.ConcertLink ? ' is-invalid' : '')}
                                placeholder={concertLink || "Concert link"}
                                ref={register}
                            />
                            {submitted && !concert.ConcertLink &&
                                <div className="invalid-feedback">Concert link is required</div>
                            }
                        </Form.Group>

                        {/* <CheckBoxGenre /> */}

                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-custom" />
                        <Link to="/" className="btn btn-link fgpw">Cancel</Link>
                    </div>
                </form>
            </div>
        </div >
    );
};
export default ConcertForm;