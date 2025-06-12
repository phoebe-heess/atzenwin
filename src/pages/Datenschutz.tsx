import React from 'react';
import PageLayout from '../components/PageLayout';
import { openBurgerMenu } from '../components/BurgerMenu';
import { useNavigate } from 'react-router-dom';

const GREEN = '#03855c';

export default function Datenschutz() {
  const navigate = useNavigate();
  return (
    <PageLayout title="DATENSCHUTZ" onClose={() => navigate('/') }>
      <div style={{ 
        maxWidth: 600, 
        padding: '0 20px', 
        fontSize: 16, 
        lineHeight: 1.6,
        color: GREEN,
        textAlign: 'center',
        fontFamily: 'monospace',
      }}>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '24px 0 8px 0' }}>Name und Kontakt des Verantwortlichen gemäß Artikel 4 Abs. 7 DSGVO</div>
        <div>Firma: Atzengold<br />Anschrift: Nürnberger Str. 97, 90762 Fürth<br />Telefon: +49 152 160 84 775<br />E-Mail: gp@atzengold.net</div>

        <div style={{ fontWeight: 700, fontSize: 18, margin: '24px 0 8px 0' }}>Sicherheit und Schutz Ihrer personenbezogenen Daten</div>
        <div>Wir betrachten es als unsere vorrangige Aufgabe, die Vertraulichkeit der von Ihnen bereitgestellten personenbezogenen Daten zu wahren und diese vor unbefugten Zugriffen zu schützen. Deshalb wenden wir äußerste Sorgfalt und modernste Sicherheitsstandards an, um einen maximalen Schutz Ihrer personenbezogenen Daten zu gewährleisten.<br /><br />Als privatrechtliches Unternehmen unterliegen wir den Bestimmungen der europäischen Datenschutzgrundverordnung (DSGVO) und den Regelungen des Bundesdatenschutzgesetzes (BDSG). Wir haben technische und organisatorische Maßnahmen getroffen, die sicherstellen, dass die Vorschriften über den Datenschutz sowohl von uns, als auch von unseren externen Dienstleistern beachtet werden.</div>

        <div style={{ fontWeight: 700, fontSize: 18, margin: '24px 0 8px 0' }}>Begriffsbestimmungen</div>
        <div>Der Gesetzgeber fordert, dass personenbezogene Daten auf rechtmäßige Weise, nach Treu und Glauben und in einer für die betroffene Person nachvollziehbaren Weise verarbeitet werden ("Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz"). Um dies zu gewährleisten, informieren wir Sie über die einzelnen gesetzlichen Begriffsbestimmungen, die auch in dieser Datenschutzerklärung verwendet werden:</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Personenbezogene Daten</div>
        <div>"Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene Person") beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Verarbeitung</div>
        <div>"Verarbeitung" ist jeder, mit oder ohne Hilfe automatisierter Verfahren, ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Einschränkung der Verarbeitung</div>
        <div>"Einschränkung der Verarbeitung" ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Profiling</div>
        <div>"Profiling" ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Pseudonymisierung</div>
        <div>"Pseudonymisierung" ist die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden können.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Dateisystem</div>
        <div>"Dateisystem" ist jede strukturierte Sammlung personenbezogener Daten, die nach bestimmten Kriterien zugänglich sind, unabhängig davon, ob diese Sammlung zentral, dezentral oder nach funktionalen oder geografischen Gesichtspunkten geordnet geführt wird.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Verantwortlicher</div>
        <div>"Verantwortlicher" ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so können der Verantwortliche beziehungsweise die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Auftragsverarbeiter</div>
        <div>"Auftragsverarbeiter" ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Empfänger</div>
        <div>"Empfänger" ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, denen personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger; die Verarbeitung dieser Daten durch die genannten Behörden erfolgt im Einklang mit den geltenden Datenschutzvorschriften gemäß den Zwecken der Verarbeitung.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Dritter</div>
        <div>"Dritter" ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Einwilligung</div>
        <div>Eine "Einwilligung" der betroffenen Person ist jede freiwillig für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Rechtmäßigkeit der Verarbeitung</div>
        <div>Die Verarbeitung personenbezogener Daten ist nur rechtmäßig, wenn für die Verarbeitung eine Rechtsgrundlage besteht. Rechtsgrundlage für die Verarbeitung können gemäß Artikel 6 Abs. 1 lit. a - f DSGVO insbesondere sein:</div>
        <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
          <li>Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie betreffenden personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben;</li>
          <li>die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen;</li>
          <li>die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt;</li>
          <li>die Verarbeitung ist erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen;</li>
          <li>die Verarbeitung ist für die Wahrnehmung einer Aufgabe erforderlich, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;</li>
          <li>die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen, insbesondere dann, wenn es sich bei der betroffenen Person um ein Kind handelt.</li>
        </ul>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Information über die Erhebung personenbezogener Daten</div>
        <div>(1) Im Folgenden informieren wir über die Erhebung personenbezogener Daten bei Nutzung unserer Website. Personenbezogene Daten sind z.B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.</div>
        <div>(2) Bei einer Kontaktaufnahme mit uns per E-Mail oder über ein Kontaktformular werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder die Verarbeitung wird eingeschränkt, falls gesetzliche Aufbewahrungspflichten bestehen.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Erhebung personenbezogener Daten bei Besuch unserer Website</div>
        <div>Bei der bloß informatorischen Nutzung der Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt. Wenn Sie unsere Website betrachten möchten, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten (Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO):</div>
        <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
          <li>Inhalt der Anforderung (konkrete Seite)</li>
          <li>Zugriffsstatus/HTTP-Statuscode</li>
          <li>jeweils übertragene Datenmenge</li>
          <li>Website, von der die Anforderung kommt</li>
          <li>Browser</li>
          <li>Betriebssystem und dessen Oberfläche</li>
          <li>Sprache und Version der Browsersoftware</li>
        </ul>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Einsatz von Cookies</div>
        <div>(1) Zusätzlich zu den zuvor genannten Daten werden bei der Nutzung unserer Website Cookies auf Ihrem Rechner gespeichert. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrer Festplatte dem von Ihnen verwendeten Browser zugeordnet gespeichert werden und durch welche der Stelle, die den Cookie setzt, bestimmte Informationen zufließen. Cookies können keine Programme ausführen oder Viren auf Ihren Computer übertragen. Sie dienen dazu, das Internetangebot insgesamt nutzerfreundlicher und effektiver zu machen.</div>
        <div>(2) Diese Website nutzt folgende Arten von Cookies, deren Umfang und Funktionsweise im Folgenden erläutert werden:</div>
        <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
          <li>Transiente Cookies (dazu a.)</li>
          <li>Persistente Cookies (dazu b.)</li>
        </ul>
        <div>Transiente Cookies werden automatisiert gelöscht, wenn Sie den Browser schließen. Dazu zählen insbesondere die Session-Cookies. Diese speichern eine sogenannte Session-ID, mit welcher sich verschiedene Anfragen Ihres Browsers der gemeinsamen Sitzung zuordnen lassen. Dadurch kann Ihr Rechner wiedererkannt werden, wenn Sie auf unsere Website zurückkehren. Die Session-Cookies werden gelöscht, wenn Sie sich ausloggen oder den Browser schließen.</div>
        <div>Persistente Cookies werden automatisiert nach einer vorgegebenen Dauer gelöscht, die sich je nach Cookie unterscheiden kann. Sie können die Cookies in den Sicherheitseinstellungen Ihres Browsers jederzeit löschen.</div>
        <div>Sie können Ihre Browser-Einstellung entsprechend Ihren Wünschen konfigurieren und z.B. die Annahme von Third-Party-Cookies oder allen Cookies ablehnen. Sog. "Third Party Cookies" sind Cookies, die durch einen Dritten gesetzt wurden, folglich nicht durch die eigentliche Website auf der man sich gerade befindet. Wir weisen Sie darauf hin, dass Sie durch die Deaktivierung von Cookies eventuell nicht alle Funktionen dieser Website nutzen können.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Weitere Funktionen und Angebote unserer Website</div>
        <div>(1) Neben der rein informatorischen Nutzung unserer Website bieten wir verschiedene Leistungen an, die Sie bei Interesse nutzen können. Dazu müssen Sie in der Regel weitere personenbezogene Daten angeben, die wir zur Erbringung der jeweiligen Leistung nutzen und für die die zuvor genannten Grundsätze zur Datenverarbeitung gelten.</div>
        <div>(2) Teilweise bedienen wir uns zur Verarbeitung Ihrer Daten externer Dienstleister. Diese wurden von uns sorgfältig ausgewählt und beauftragt, sind an unsere Weisungen gebunden und werden regelmäßig kontrolliert.</div>
        <div>(3) Weiterhin können wir Ihre personenbezogenen Daten an Dritte weitergeben, wenn Aktionsteilnahmen, Gewinnspiele, Vertragsabschlüsse oder ähnliche Leistungen von uns gemeinsam mit Partnern angeboten werden. Nähere Informationen hierzu erhalten Sie bei Angabe Ihrer personenbezogenen Daten oder untenstehend in der Beschreibung des Angebotes.</div>
        <div>(4) Soweit unsere Dienstleister oder Partner ihren Sitz in einem Staat außerhalb des Europäischen Wirtschaftsraumen (EWR) haben, informieren wir Sie über die Folgen dieses Umstands in der Beschreibung des Angebotes.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Kinder</div>
        <div>Unser Angebot richtet sich grundsätzlich an Erwachsene. Personen unter 18 Jahren sollten ohne Zustimmung der Eltern oder Erziehungsberechtigten keine personenbezogenen Daten an uns übermitteln.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Rechte der betroffenen Person</div>
        <div>(1) Widerruf der Einwilligung</div>
        <div>Sofern die Verarbeitung der personenbezogenen Daten auf einer erteilten Einwilligung beruht, haben Sie jederzeit das Recht, die Einwilligung zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.</div>
        <div>Für die Ausübung des Widerrufsrechts können Sie sich jederzeit an uns wenden.</div>

        <div>(2) Recht auf Bestätigung</div>
        <div>Sie haben das Recht, von dem Verantwortlichen eine Bestätigung darüber zu verlangen, ob wir sie betreffende personenbezogene Daten verarbeiten. Die Bestätigung können Sie jederzeit unter den oben genannten Kontaktdaten verlangen.</div>

        <div>(3) Auskunftsrecht</div>
        <div>Sofern personenbezogene Daten verarbeitet werden, können Sie jederzeit Auskunft über diese personenbezogenen Daten und über folgenden Informationen verlangen:</div>
        <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
          <li>die Verarbeitungszwecke;</li>
          <li>den Kategorien personenbezogener Daten, die verarbeitet werden;</li>
          <li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen;</li>
          <li>falls möglich, die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer;</li>
          <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;</li>
          <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
          <li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden, alle verfügbaren Informationen über die Herkunft der Daten;</li>
          <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Absätze 1 und 4 DSGVO und - zumindest in diesen Fällen - aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.</li>
        </ul>

        <div>Werden personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt, so haben Sie das Recht, über die geeigneten Garantien gemäß Artikel 46 DSGVO im Zusammenhang mit der Übermittlung unterrichtet zu werden. Wir stellen eine Kopie der personenbezogenen Daten, die Gegenstand der Verarbeitung sind, zur Verfügung. Für alle weiteren Kopien, die Sie Person beantragen, können wir ein angemessenes Entgelt auf der Grundlage der Verwaltungskosten verlangen. Stellen Sie den Antrag elektronisch, so sind die Informationen in einem gängigen elektronischen Format zur Verfügung zu stellen, sofern er nichts anderes angibt. Das Recht auf Erhalt einer Kopie gemäß Absatz 3 darf die Rechte und Freiheiten anderer Personen nicht beeinträchtigen.</div>

        <div>(4) Recht auf Berichtigung</div>
        <div>Sie haben das Recht, von uns unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie das Recht, die Vervollständigung unvollständiger personenbezogener Daten - auch mittels einer ergänzenden Erklärung - zu verlangen.</div>

        <div>(5) Recht auf Löschung ("Recht auf vergessen werden")</div>
        <div>Sie haben das Recht, von dem Verantwortlichen zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden, und wir sind verpflichtet, personenbezogene Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:</div>
        <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
          <li>Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
          <li>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
          <li>Die betroffene Person legt gemäß Artikel 21 Absatz 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Artikel 21 Absatz 2 DSGVO Widerspruch gegen die Verarbeitung ein.</li>
          <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
          <li>Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
          <li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Artikel 8 Absatz 1 DSGVO erhoben.</li>
        </ul>

        <div>Hat der Verantwortliche die personenbezogenen Daten öffentlich gemacht und ist er gemäß Absatz 1 zu deren Löschung verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass eine betroffene Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat.</div>

        <div>Das Recht auf Löschung ("Recht auf vergessen werden") besteht nicht, soweit die Verarbeitung erforderlich ist:</div>
        <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
          <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
          <li>zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;</li>
          <li>aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Artikel 9 Absatz 2 Buchstaben h und i sowie Artikel 9 Absatz 3 DSGVO;</li>
          <li>für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gemäß Artikel 89 Absatz 1 DSGVO, soweit das in Absatz 1 genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder</li>
          <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
        </ul>

        <div>(6) Recht auf Einschränkung der Verarbeitung</div>
        <div>Sie haben das Recht, von uns die Einschränkung der Verarbeitung ihrer personenbezogenen Daten zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:</div>
        <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
          <li>die Richtigkeit der personenbezogenen Daten von der betroffenen Person bestritten wird, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen,</li>
          <li>die Verarbeitung unrechtmäßig ist und die betroffene Person die Löschung der personenbezogenen Daten ablehnt und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangt;</li>
          <li>der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, die betroffene Person sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigt, oder</li>
          <li>die betroffene Person Widerspruch gegen die Verarbeitung gemäß Artikel 21 Absatz 1 DSGVO eingelegt hat, solange noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen.</li>
        </ul>

        <div>Wurde die Verarbeitung gemäß den oben genannten Voraussetzungen eingeschränkt, so werden diese personenbezogenen Daten - von ihrer Speicherung abgesehen - nur mit Einwilligung der betroffenen Person oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet.</div>

        <div>Um das Recht auf Einschränkung der Verarbeitung geltend zu machen, kann sich die betroffene Person jederzeit an uns unter den oben angegebenen Kontaktdaten wenden.</div>

        <div>(7) Recht auf Datenübertragbarkeit</div>
        <div>Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern:</div>
        <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
          <li>die Verarbeitung auf einer Einwilligung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a oder auf einem Vertrag gemäß Artikel 6 Absatz 1 Buchstabe b DSGVO beruht und</li>
          <li>die Verarbeitung mithilfe automatisierter Verfahren erfolgt.</li>
        </ul>

        <div>Bei der Ausübung des Rechts auf Datenübertragbarkeit gemäß Absatz 1 haben Sie das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen zu einem anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist. Die Ausübung des Rechts auf Datenübertragbarkeit lässt das Recht auf Löschung ("Recht auf Vergessen werden") unberührt. Dieses Recht gilt nicht für eine Verarbeitung, die für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.</div>

        <div>(8) Widerspruchsrecht</div>
        <div>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Artikel 6 Absatz 1 Buchstaben e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Der Verantwortliche verarbeitet die personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</div>

        <div>Werden personenbezogene Daten verarbeitet, um Direktwerbung zu betreiben, so haben SIe das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden die personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.</div>

        <div>Im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft könne Sie ungeachtet der Richtlinie 2002/58/EG Ihr Widerspruchsrecht mittels automatisierter Verfahren ausüben, bei denen technische Spezifikationen verwendet werden.</div>

        <div>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Sie betreffende Verarbeitung Sie betreffender personenbezogener Daten, die zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Artikel 89 Absatz 1 erfolgt, Widerspruch einzulegen, es sei denn, die Verarbeitung ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich.</div>

        <div>Das Widerspruchsrecht können Sie jederzeit ausüben, indem Sie sich an den jeweiligen Verantwortlichen wenden.</div>

        <div>(9) Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</div>
        <div>Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung - einschließlich Profiling - beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt. Dies gilt nicht, wenn die Entscheidung:</div>
        <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
          <li>für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist,</li>
          <li>aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder</li>
          <li>mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.</li>
        </ul>

        <div>Der Verantwortliche trifft angemessene Maßnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.</div>

        <div>Dieses Recht kann die betroffene Person jederzeit ausüben, indem sie sich an den jeweiligen Verantwortlichen wendet.</div>

        <div>(10) Recht auf Beschwerde bei einer Aufsichtsbehörde</div>
        <div>Sie haben zudem, unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs, das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn die betroffene Person der Ansicht ist, dass die Verarbeitung der sie betreffenden personenbezogenen Daten gegen diese Verordnung verstößt.</div>

        <div>(11) Recht auf wirksamen gerichtlichen Rechtsbehelf</div>
        <div>Sie haben unbeschadet eines verfügbaren verwaltungsrechtlichen oder außergerichtlichen Rechtsbehelfs einschließlich des Rechts auf Beschwerde bei einer Aufsichtsbehörde gemäß Artikel 77 DSGVO das Recht auf einen wirksamen gerichtlichen Rechtsbehelf, wenn sie der Ansicht ist, dass die ihr aufgrund dieser Verordnung zustehenden Rechte infolge einer nicht im Einklang mit dieser Verordnung stehenden Verarbeitung ihrer personenbezogenen Daten verletzt wurden.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Einsatz von Wix</div>
        <div>(1) Diese Website nutzt den Webdienst Wix und sein Analytics Angebot, um die Nutzung unserer Website analysieren und regelmäßig verbessern zu können. Über die gewonnenen Statistiken können wir unser Angebot verbessern und für Sie als Nutzer interessanter ausgestalten. Rechtsgrundlage für die Nutzung von Wix Analytics ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.</div>
        <div>(2) Für diese Auswertung werden Cookies auf Ihrem Computer gespeichert. Die so erhobenen Informationen speichert der Verantwortliche ausschließlich auf seinem Server in [Deutschland]. Die Auswertung können Sie einstellen durch Löschung vorhandener Cookies und die Verhinderung der Speicherung von Cookies. Wenn Sie die Speicherung der Cookies verhindern, weisen wir darauf hin, dass Sie gegebenenfalls diese Website nicht vollumfänglich nutzen können. Die Verhinderung der Speicherung von Cookies ist durch die Einstellung in ihrem Browser möglich. Die Verhinderung des Einsatzes von Wix Analytics ist möglich, indem Sie den folgenden Haken entfernen und so das Opt-out-Plug-in aktivieren:</div>
        <div>(3) Diese Website verwendet Wix Analytics. Dadurch werden IP-Adressen gekürzt weiterverarbeitet, eine direkte Personenbeziehbarkeit kann damit ausgeschlossen werden. Die mittels Wix von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen von uns erhobenen Daten zusammengeführt.</div>
        <div>(4) Weiter Informationen des Drittanbieters zum Datenschutz erhalten Sie unter https://de.wix.com/about/privacy.</div>

        <div style={{ fontWeight: 700, margin: '20px 0 8px 0' }}>Einbindung von Google Maps</div>
        <div>(1) Auf dieser Website nutzen wir das Angebot von Google Maps. Dadurch können wir Ihnen interaktive Karten direkt in der Website anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.</div>
        <div>(2) Durch den Besuch auf der Website erhält Google die Information, dass Sie die entsprechende Unterseite unserer Website aufgerufen haben. Zudem werden die unter § 3 dieser Erklärung genannten Daten übermittelt. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob kein Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet. Wenn Sie die Zuordnung mit Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung des Buttons ausloggen. Google speichert Ihre Daten als Nutzungsprofile und nutzt sie für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechten Gestaltung seiner Website. Eine solche Auswertung erfolgt insbesondere (selbst für nicht eingeloggte Nutzer) zur Erbringung von bedarfsgerechter Werbung und um andere Nutzer des sozialen Netzwerks über Ihre Aktivitäten auf unserer Website zu informieren. Ihnen steht ein Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Sie sich zur Ausübung dessen an Google richten müssen.</div>
        <div>(3) Weitere Informationen zu Zweck und Umfang der Datenerhebung und ihrer Verarbeitung durch den Plug-in-Anbieter erhalten Sie in den Datenschutzerklärungen des Anbieters. Dort erhalten Sie auch weitere Informationen zu Ihren diesbezüglichen Rechten und Einstellungsmöglichkeiten zum Schutze Ihrer Privatsphäre: www.google.de/intl/de/policies/privacy. Google verarbeitet Ihre personenbezogenen Daten auch in den USA und hat sich dem EU-US Privacy Shield unterworfen, https://www.privacyshield.gov/EU-US-Framework.</div>
      </div>
    </PageLayout>
  );
} 