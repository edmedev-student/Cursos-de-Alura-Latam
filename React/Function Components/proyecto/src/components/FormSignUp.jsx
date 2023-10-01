import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function FormSignUp({handleSubmit}) {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [promo, setPromo] = useState(true);
	const [novelty, setNovelty] = useState(false);
	const [errors, setErrors] = useState({
		name: {
			error: false,
			message:
				"Deben ser al menos 3 caracteres",
		},
	});

	function validateName(verifyName) {
		if (verifyName.length >= 3) {
			return {
				name: {
					error: false,
					message: "",
				},
			}
		} else {
			return {
				name: {
					error: true,
					message:
						"Deben ser al menos 3 caracteres",
				},
			}
		}
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleSubmit({
					name,
					lastName,
					email,
					promo,
					novelty,
				})
			}}
		>
			<TextField 
				id="name"
				label="Nombre"
				variant="outlined"
				fullWidth
				margin="normal"
				value={name}
				onChange={(e) =>
					setName(e.target.value)
				}
				error={errors.name.error}
				helperText={
					errors.name.error
						? errors.name.message
						: ""
				}
				onBlur={(e) => {
					setErrors(
						validateName(
							e.target.value
						)
					)
				}}
			/>
			<TextField 
				id="lastName"
				label="Apellidos"
				variant="outlined"
				fullWidth
				margin="normal"
				value={lastName}
				onChange={(e) =>
					setLastName(e.target.value)
				}
			/>
			<TextField 
				id="email"
				label="Email"
				variant="outlined"
				fullWidth
				margin="normal"
				value={email}
				onChange={(e) =>
					setEmail(e.target.value)
				}
			/>
			<FormGroup>
				<FormControlLabel 
					control={
						<Switch
							checked={promo}
							onChange={(e) =>
								setPromo(e.target.checked)
							}
						/>
					}
					label="Promociones"
				/>
				<FormControlLabel 
					control={
						<Switch
							checked={novelty}
							onChange={(e) =>
								setNovelty(e.target.checked)
							}
						/>
					}
					label="Novedades"
				/>
			</FormGroup>
			<Button variant="contained" type="submit">
				Registrarse
			</Button>
		</form>
	)
}

export default FormSignUp;
