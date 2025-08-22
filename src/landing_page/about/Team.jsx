import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TeamMember = ({ imageSrc, name, title, children }) => {
  return (
    <div className="col-12 col-md-4 mb-5 text-center team-container">
      <img className="team-members-image" src={imageSrc} alt={name} />
      <h5 className="mt-3 mb-1">{name}</h5>
      <p className="text-muted m-0">{title}</p>
      <div className="mt-2 text-center">
        <Accordion elevation={0} disableGutters square className="team-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="small" />} className="bio-summary">
            <a href="#" onClick={(e) => e.preventDefault()} className="bio-link">Bio</a>
          </AccordionSummary>
          <AccordionDetails>
            <div className="text-start small">{children}</div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="team-section pb-5">
      <div className="container">
        <div className="row justify-content-between g-4">
          <TeamMember imageSrc="/static/images/Nikhil.jpg" name="Nikhil Kamath" title="Co-founder & CFO">
            <p>
              Nikhil is an astute and experienced investor, and he heads financial planning at
              Zerodha. An avid reader, he always appreciates a good game of chess.
            </p>
          </TeamMember>
          <TeamMember imageSrc="/static/images/Kailash.jpg" name="Dr. Kailash Nadh" title="CTO">
            <p>
              Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the
              brain behind all our technology and products. He has been a developer from his
              adolescence and continues to write code every day.
            </p>
          </TeamMember>
          <TeamMember imageSrc="/static/images/Venu.jpg" name="Venu Madhav" title="COO">
            <p>
              Venu is the backbone of Zerodha taking care of operations and ensuring that we are
              compliant to rules and regulations. He has over a dozen certifications in financial
              markets and is also proficient in technical analysis. Workouts, cycling, and
              adventuring is what he does outside of Zerodha.
            </p>
          </TeamMember>
        </div>

        <div className="row justify-content-between g-4 mt-1">
          <TeamMember imageSrc="/static/images/Hanan.jpg" name="Hanan Delvi" title="CCO">
            <p>
              We take pride in the way we support our clients, and Hanan is responsible for this
              with his never ending flow of energy. He is the man behind many of our support
              initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be
              seen posing as one in his free time.
            </p>
          </TeamMember>
          <TeamMember imageSrc="/static/images/Seema.jpg" name="Seema Patil" title="Director">
            <p>
              Seema who has lead the quality team since the beginning of Zerodha, is now a
              director. She is an extremely disciplined fitness enthusiast.
            </p>
          </TeamMember>
          <TeamMember imageSrc="/static/images/karthik.jpg" name="Karthik Rangappa" title="Chief of Education">
            <p>
              Karthik "Guru" Rangappa single handedly wrote Varsity, Zerodha's massive educational
              program. He heads investor education initiatives at Zerodha and loves stock markets,
              classic rock, single malts, and photography.
            </p>
          </TeamMember>
        </div>

        <div className="row justify-content-start g-4 mt-1">
          <TeamMember imageSrc="/static/images/Austin.jpg" name="Austin Prakesh" title="Director Strategy">
            <p>
              Austin is a successful self-made entrepreneur from Singapore. His area of specialty
              revolves around helping organisations including grow by optimizing revenue streams and
              creating growth strategies. He is a boxing enthusiast and loves collecting exquisite
              watches.
            </p>
          </TeamMember>
        </div>
      </div>
    </section>
  );
};

export default Team;
