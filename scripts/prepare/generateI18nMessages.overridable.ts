export const THEME_NAME = "account";

export const supportedLanguages = [
    "en",
    "ar",
    "ca",
    "cs",
    "da",
    "de",
    "es",
    "fi",
    "fr",
    "hu",
    "it",
    "ja",
    "lt",
    "lv",
    "nl",
    "no",
    "pl",
    "pt-BR",
    "ru",
    "sk",
    "sv",
    "tr",
    "zh-CN"
] as const;

export const keycloakifyExtraMessages: Record<
    (typeof supportedLanguages)[number],
    Record<"newPasswordSameAsOld" | "passwordConfirmNotMatch", string>
> = {
    en: {
        newPasswordSameAsOld: "New password must be different from the old one",
        passwordConfirmNotMatch: "Password confirmation does not match"
    },
    /* spell-checker: disable */
    ar: {
        newPasswordSameAsOld: "يجب أن تكون كلمة المرور الجديدة مختلفة عن القديمة",
        passwordConfirmNotMatch: "تأكيد كلمة المرور لا يتطابق"
    },
    ca: {
        newPasswordSameAsOld: "La nova contrasenya ha de ser diferent de l'anterior",
        passwordConfirmNotMatch: "La confirmació de la contrasenya no coincideix"
    },
    cs: {
        newPasswordSameAsOld: "Nové heslo musí být odlišné od starého",
        passwordConfirmNotMatch: "Potvrzení hesla se neshoduje"
    },
    da: {
        newPasswordSameAsOld: "Det nye kodeord skal være forskelligt fra det gamle",
        passwordConfirmNotMatch: "Adgangskodebekræftelse matcher ikke"
    },
    de: {
        newPasswordSameAsOld: "Das neue Passwort muss sich vom alten unterscheiden",
        passwordConfirmNotMatch: "Passwortbestätigung stimmt nicht überein"
    },
    es: {
        newPasswordSameAsOld: "La nueva contraseña debe ser diferente de la anterior",
        passwordConfirmNotMatch: "La confirmación de la contraseña no coincide"
    },
    fi: {
        newPasswordSameAsOld: "Uusi salasana on oltava erilainen kuin vanha",
        passwordConfirmNotMatch: "Salasanan vahvistus ei täsmää"
    },
    fr: {
        newPasswordSameAsOld: "Le nouveau mot de passe doit être différent de l'ancien",
        passwordConfirmNotMatch: "La confirmation du mot de passe ne correspond pas"
    },
    hu: {
        newPasswordSameAsOld: "Az új jelszónak különböznie kell az előzőtől",
        passwordConfirmNotMatch: "A jelszó megerősítése nem egyezik"
    },
    it: {
        newPasswordSameAsOld: "La nuova password deve essere diversa da quella precedente",
        passwordConfirmNotMatch: "La conferma della password non corrisponde"
    },
    ja: {
        newPasswordSameAsOld: "新しいパスワードは古いパスワードと異なる必要があります",
        passwordConfirmNotMatch: "パスワード確認が一致しません"
    },
    lt: {
        newPasswordSameAsOld: "Naujas slaptažodis turi skirtis nuo seno",
        passwordConfirmNotMatch: "Slaptažodžio patvirtinimas neatitinka"
    },
    lv: {
        newPasswordSameAsOld: "Jaunajam parolam jābūt atšķirīgam no vecā",
        passwordConfirmNotMatch: "Paroles apstiprināšana neatbilst"
    },
    nl: {
        newPasswordSameAsOld: "Het nieuwe wachtwoord moet verschillend zijn van het oude",
        passwordConfirmNotMatch: "Wachtwoordbevestiging komt niet overeen"
    },
    no: {
        newPasswordSameAsOld: "Det nye passordet må være forskjellig fra det gamle",
        passwordConfirmNotMatch: "Passordbekreftelsen stemmer ikke"
    },
    pl: {
        newPasswordSameAsOld: "Nowe hasło musi być inne niż stare",
        passwordConfirmNotMatch: "Potwierdzenie hasła nie pasuje"
    },
    "pt-BR": {
        newPasswordSameAsOld: "A nova senha deve ser diferente da antiga",
        passwordConfirmNotMatch: "A confirmação da senha não corresponde"
    },
    ru: {
        newPasswordSameAsOld: "Новый пароль должен отличаться от старого",
        passwordConfirmNotMatch: "Подтверждение пароля не совпадает"
    },
    sk: {
        newPasswordSameAsOld: "Nové heslo musí byť odlišné od starého",
        passwordConfirmNotMatch: "Potvrdenie hesla sa nezhoduje"
    },
    sv: {
        newPasswordSameAsOld: "Det nya lösenordet måste skilja sig från det gamla",
        passwordConfirmNotMatch: "Lösenordsbekräftelsen matchar inte"
    },
    tr: {
        newPasswordSameAsOld: "Yeni şifre eskisinden farklı olmalıdır",
        passwordConfirmNotMatch: "Şifre doğrulama eşleşmiyor"
    },
    "zh-CN": {
        newPasswordSameAsOld: "新密码必须与旧密码不同",
        passwordConfirmNotMatch: "密码确认不匹配"
    }
    /* spell-checker: enable */
};
